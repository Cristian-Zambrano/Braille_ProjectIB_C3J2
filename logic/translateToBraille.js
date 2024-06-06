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
    'Z': '⠨⠵',  '\u00A0': '\u00A0'
};
/**
 * Traduce una cadena de texto al alfabeto Braille.
 * Por cada caracter del mapa, verifica si existe en el texto, caso contrario
 * devuelve un caracter indicando desconocimiento de la conversión
 * @param {string} inputText - El texto a traducir.
 * @returns {string} El texto traducido al Braille.
 */
export function translateToBraille(inputText) {
    let outputBraille = '';
    for (let char of inputText) {
        if (brailleMap[char]) {
            outputBraille += brailleMap[char] + ' ';
        } else {
            outputBraille += '❓ ';  
        }
    }

     return outputBraille;
}


