/**
 * Añade un manejador de eventos al botón 'translateToBrailleButton'.
 * Cuando se hace clic en el botón, se ejecuta la función 'sendResultBraille' con el valor del elemento con id 'textInput' como argumento.
 */
document.getElementById('translateToBrailleButton').addEventListener('click', function() {
    sendResultBraille(document.getElementById('textInput').value);
});

/**
 * Añade un manejador de eventos al elemento de entrada de texto con id 'textInput'.
 * Cuando se introduce texto en el elemento, se ejecuta la función 'autoResize'.
 */
document.getElementById('textInput').addEventListener('input', autoResize);

/**
 * Mapa de caracteres a su representación en Braille, de acuerdo con los requerimientos establecidos.
 * @type {Object}
 */

export const brailleMap = {
    'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
    'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
    'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
    'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
    'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
    'z': '⠵', '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉',
    '4': '⠼⠙', '5': '⠼⠑', '6': '⠼⠋', '7': '⠼⠛',
    '8': '⠼⠓', '9': '⠼⠊', '0': '⠼⠚',
    'á': '⠷','é': '⠮', 'í': '⠌', 'ó': '⠬', 'ú': '⠾', 'ñ': '⠻','ü':'⠳',
    '.': '⠄', ',': '⠂', ';': '⠆', ':': '⠒', '_': '⠤',
    '¿': '⠢', '?': '⠢', '¡': '⠖', '!': '⠖', '"': '⠦',
    '(': '⠣', ')': '⠜', '+': '⠐⠖', '*': '⠐⠦',  '=': '⠐⠶', '÷': '⠐⠌',  '-': '⠐⠤',
    'A': '⠨⠁', 'B': '⠨⠃', 'C': '⠨⠉', 'D': '⠨⠙', 'E': '⠨⠑',
    'F': '⠨⠋', 'G': '⠨⠛', 'H': '⠨⠓', 'I': '⠨⠊', 'J': '⠨⠚',
    'K': '⠨⠅', 'L': '⠨⠇', 'M': '⠨⠍', 'N': '⠨⠝', 'O': '⠨⠕',
    'P': '⠨⠏', 'Q': '⠨⠟', 'R': '⠨⠗', 'S': '⠨⠎', 'T': '⠨⠞',
    'U': '⠨⠥', 'V': '⠨⠧', 'W': '⠨⠺', 'X': '⠨⠭', 'Y': '⠨⠽',
    'Z': '⠨⠵',  ' ': ' '
};
/**
 * Traduce una cadena de texto al alfabeto Braille.
 * Por cada caracter del mapa, verifica si existe en el texto, caso contrario
 * devuelve un caracter indicando desconocimiento de la conversión
 * @param {string} inputText - El texto a traducir.
 * @returns {string} El texto traducido al Braille.
 */
function translateToBraille(inputText) {
    let outputBraille = '';
    for (let char of inputText) {
        if (brailleMap[char]) {
            outputBraille += brailleMap[char] + ' ';
        } else {
            outputBraille += '❓ ';  
        }
    }

     return outputBraille.trim();
}
/**
 * Envía el resultado de la traducción al Braille al elemento con id 'brailleOutput'.
 * Se necesita para enviar el texto por parámetro
 * @param {string} text - El texto a traducir.
 */
function sendResultBraille(text){
    document.getElementById('brailleOutput').innerText = translateToBraille(text);
}
/**
 * Ajusta automáticamente el tamaño del elemento de entrada de texto a medida que se introduce texto.
 */
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}
