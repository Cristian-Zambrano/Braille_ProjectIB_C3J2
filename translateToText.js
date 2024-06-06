const brailleMap = {
    'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑',
    'f': '⠋', 'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚',
    'k': '⠅', 'l': '⠇', 'm': '⠍', 'n': '⠝', 'o': '⠕',
    'p': '⠏', 'q': '⠟', 'r': '⠗', 's': '⠎', 't': '⠞',
    'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭', 'y': '⠽',
    'z': '⠵', '1': '⠼⠁', '2': '⠼⠃', '3': '⠼⠉',
    '4': '⠼⠙', '5': '⠼⠑', '6': '⠼⠋', '7': '⠼⠛',
    '8': '⠼⠓', '9': '⠼⠊', '0': '⠼⠚',
    'á': '⠷', 'é': '⠮', 'í': '⠌', 'ó': '⠬', 'ú': '⠾', 'ñ': '⠻', 'ü': '⠳',
    '.': '⠄', ',': '⠂', ';': '⠆', ':': '⠒', '_': '⠤',
    '¿': '⠢', '?': '⠢', '¡': '⠖', '!': '⠖', '"': '⠦',
    '(': '⠣', ')': '⠜', '+': '⠐⠖', '*': '⠐⠦', '=': '⠐⠶', '÷': '⠐⠌', '-': '⠐⠤',
    'A': '⠨⠁', 'B': '⠨⠃', 'C': '⠨⠉', 'D': '⠨⠙', 'E': '⠨⠑',
    'F': '⠨⠋', 'G': '⠨⠛', 'H': '⠨⠓', 'I': '⠨⠊', 'J': '⠨⠚',
    'K': '⠨⠅', 'L': '⠨⠇', 'M': '⠨⠍', 'N': '⠨⠝', 'O': '⠨⠕',
    'P': '⠨⠏', 'Q': '⠨⠟', 'R': '⠨⠗', 'S': '⠨⠎', 'T': '⠨⠞',
    'U': '⠨⠥', 'V': '⠨⠧', 'W': '⠨⠺', 'X': '⠨⠭', 'Y': '⠨⠽',
    'Z': '⠨⠵', ' ': ' '
};

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

function translateToText(text) {
    const brailleText = text;
    let outputText = '';
    let interrogationCount = 0;
    let exclamationCount = 0;
    for (let i = 0; i < brailleText.length; i++) {
        const char = brailleText[i];
        switch (char) {
            case '⠼':
                i++;
                outputText += reverseBrailleMap['⠼' + brailleText[i]];
                break;
            case '⠢':
                interrogationCount++;
                outputText += (interrogationCount % 2 == 1) ? '¿' : '?';
                break;
            case '⠖':
                exclamationCount++;
                outputText += (exclamationCount % 2 === 1) ? '¡' : '!';
                break;
            case '⠨':
                i++;
                outputText += reverseBrailleMap['⠨' + brailleText[i]].toUpperCase();
                break;
            case '⠐':
                i++;
                outputText += reverseBrailleMap['⠐' + brailleText[i]];
                break;
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

module.exports = translateToText;