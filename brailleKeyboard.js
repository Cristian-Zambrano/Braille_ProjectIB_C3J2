import { brailleMap } from './translateToBraille.js';

const brailleKeyboard = document.getElementById('brailleKeyboard');

// Crear las teclas del teclado virtual
for (let [char, braille] of Object.entries(brailleMap)) {
    const key = document.createElement('div');
    key.className = 'braille-key';
    key.innerHTML = `<span>${char === ' ' ? 'Espacio en blanco' : char}</span><div class="braille-symbol">${braille}</div>`;
    key.dataset.char = char;
    brailleKeyboard.appendChild(key);
    key.addEventListener('click', addBrailleCharacter);
}

function addBrailleCharacter(event) {
    const brailleChar = event.currentTarget.querySelector('.braille-symbol').innerText;
    const brailleTextInput = document.getElementById('brailleTextInput');
    brailleTextInput.value += brailleChar;
}