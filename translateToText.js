/**
 * En este apartado se obtiene el texto en braille que se desea traducir.
 */
document.getElementById('translateToTextButton').addEventListener('click', sendResultText(document.getElementById('brailleTextInput').value));

/**
 * Esta variable está siendo usada para el mapeo de braille a español con los requerimientos solicitados.
 */
const reverseBrailleMap = {
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
    '⠨⠵': 'Z', ' ': ' '
};

/**
 * Esta función traduce un texto en braille de entrada recibido como parámetro a texto en español.
 * @param {String} inputText la cadena del texto en braille 
 */
function translateToText(inputText) {
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

/**
 * Esta función obtiene el evento que está al inicio de este script. Posteriormente, lo envía al metodo para traducir
 * de braille a español.
 * @param {String} textInBraille texto recibido del evento
 */
function sendResultText(textInBraille) {
    document.getElementById('brailleOutput').innerText = translateToText(textInBraille);
}
