/**
 * Esta variable está siendo usada para el mapeo de braille a español con los requerimientos solicitados.
 */
export const reverseBrailleMap = {
    '⠁': 'a', '⠃': 'b', '⠉': 'c', '⠙': 'd', '⠑': 'e',
    '⠋': 'f', '⠛': 'g', '⠓': 'h', '⠊': 'i', '⠚': 'j',
    '⠅': 'k', '⠇': 'l', '⠍': 'm', '⠝': 'n', '⠕': 'o',
    '⠏': 'p', '⠟': 'q', '⠗': 'r', '⠎': 's', '⠞': 't',
    '⠥': 'u', '⠧': 'v', '⠺': 'w', '⠭': 'x', '⠽': 'y',
    '⠵': 'z', '⠼⠁': '1', '⠼⠃': '2', '⠼⠉': '3',
    '⠼⠙': '4', '⠼⠑': '5', '⠼⠋': '6', '⠼⠛': '7',
    '⠼⠓': '8', '⠼⠊': '9', '⠼⠚': '0',
    '⠷': 'á', '⠮': 'é', '⠌': 'í', '⠬': 'ó', '⠾': 'ú', '⠻': 'ñ', '⠳': 'ü',
    '⠄': '.', '⠂': ',', '⠆': ';', '⠒': ':', '⠤': '_',
    '⠢': '¿', '⠖': '¡', '⠦': '"', '⠣': '(', '⠜': ')',
    '⠐⠖': '+', '⠐⠦': '*', '⠐⠶': '=', '⠐⠌': '÷', '⠐⠤': '-',
    '⠨⠁': 'A', '⠨⠃': 'B', '⠨⠉': 'C', '⠨⠙': 'D', '⠨⠑': 'E',
    '⠨⠋': 'F', '⠨⠛': 'G', '⠨⠓': 'H', '⠨⠊': 'I', '⠨⠚': 'J',
    '⠨⠅': 'K', '⠨⠇': 'L', '⠨⠍': 'M', '⠨⠝': 'N', '⠨⠕': 'O',
    '⠨⠏': 'P', '⠨⠟': 'Q', '⠨⠗': 'R', '⠨⠎': 'S', '⠨⠞': 'T',
    '⠨⠥': 'U', '⠨⠧': 'V', '⠨⠺': 'W', '⠨⠭': 'X', '⠨⠽': 'Y',
    '⠨⠵': 'Z', '\u00A0': ' ' , ' ':'\u00A0' 
};

/**
 * Esta función traduce un texto en braille de entrada recibido como parámetro a texto en español.
 * @param {String} inputText la cadena del texto en braille 
 */
export function translateToText(inputText) {
    const brailleText = inputText;
    let outputText = '';
    let interrogationCount = 0;
    let exclamationCount = 0;
    /**
     * El siguiente bucle se utiliza para gestionar la traducción de los simbolos, letras mayusculas y minusculas 
     * de braille a español.
     */
    for (let i = 0; i < brailleText.length; i++) {
        const char = brailleText[i];
        switch (char) {
            //Para cuando sea número
            case '⠼':
                i++;
                outputText += reverseBrailleMap['⠼' + brailleText[i]];
                break;
            //Para los simbolos conflictivos ¿?
            case '⠢':
                interrogationCount++;
                outputText += (interrogationCount % 2 == 1) ? '¿' : '?';
                break;
            //Para los simbolos conflictivos ¡!
            case '⠖':
                exclamationCount++;
                outputText += (exclamationCount % 2 === 1) ? '¡' : '!';
                break;
            //Para las mayúsculas
            case '⠨':
                i++;
                outputText += reverseBrailleMap['⠨' + brailleText[i]].toUpperCase();
                break;
            //Para simbolos aritméticos
            case '⠐':
                i++;
                outputText += reverseBrailleMap['⠐' + brailleText[i]];
                break;
            //Para simbolos inexistentes
            default:
                if (reverseBrailleMap[char]) {
                    outputText += reverseBrailleMap[char];
                } else {
                    outputText += '❓';
                }
                break;
        }
    }

    return outputText;
}


