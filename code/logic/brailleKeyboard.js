/**
 * Importa el mapa de caracteres Braille del módulo 'translateToBraille.js'.
 * @module translateToBraille
 */
import { brailleMap } from './translateToBraille.js';

/**
 * Referencia al elemento del DOM que representa el teclado Braille.
 * @type {HTMLElement}
 */
const brailleKeyboard = document.getElementById('brailleKeyboard');

/**
 * Crea las teclas del teclado virtual Braille y las añade al DOM.
 * Cada tecla es un div con una representación visual del carácter Braille y el carácter correspondiente.
 * También se añade un manejador de eventos de clic a cada tecla.
 */
for (let [char, braille] of Object.entries(brailleMap)) {
    const key = document.createElement('div');
    key.className = 'braille-key';
    key.innerHTML = `<span>${char ==' ' ? 'Espacio':char}</span><div class="braille-symbol">${braille}</div>`;
    key.dataset.char = char;
    brailleKeyboard.appendChild(key);
    key.addEventListener('click', addBrailleCharacter);
}

/**
 * Añade el carácter Braille correspondiente al elemento de entrada de texto Braille cuando se hace clic en una tecla.
 * @param {Event} event - El evento de clic.
 */
function addBrailleCharacter(event) {
    const brailleChar = event.currentTarget.querySelector('.braille-symbol').innerText;
    const brailleTextInput = document.getElementById('brailleTextInput');
    brailleTextInput.value += brailleChar;
}
