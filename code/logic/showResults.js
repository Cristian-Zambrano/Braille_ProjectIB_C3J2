import { translateToBraille } from './translateToBraille.js';
import { translateToText } from './translateToText.js';
/**
 * Envía el resultado de la traducción al Braille al elemento con id 'brailleOutput'.
 * Se necesita para enviar el texto por parámetro
 * @param {string} text - El texto a traducir.
 */
export function sendResultBraille(text){
    document.getElementById('brailleOutput').innerText = translateToBraille(text);
}


/**
 * Esta función obtiene el evento que está al inicio de este script. Posteriormente, lo envía al metodo para traducir
 * de braille a español.
 * @param {String} textInBraille texto recibido del evento
 */
export function sendResultText(textInBraille) {
    document.getElementById('textOutput').innerText = translateToText(textInBraille);
}

/**
 * Ajusta automáticamente el tamaño del elemento de entrada de texto a medida que se introduce texto.
 */
export function autoResize() {
    
}