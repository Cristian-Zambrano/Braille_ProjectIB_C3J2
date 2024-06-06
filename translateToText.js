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
        if (char === '⠼') {
            i++;
            outputText += reverseBrailleMap['⠼' + brailleText[i]];
        } else if (char === '⠢') {
            interrogationCount++;
            outputText += (interrogationCount % 2 == 1) ? '¿' : '?';
        } else if (char === '⠖') {
            exclamationCount++;
            outputText += (exclamationCount % 2 === 1) ? '¡' : '!';
        } else if (char === '⠨') {
            i++;
            outputText += reverseBrailleMap['⠨' + brailleText[i]].toUpperCase();
        } else if (char === '⠐') {
            i++;
            outputText += reverseBrailleMap['⠐' + brailleText[i]];
        } else if (reverseBrailleMap[char]) {
            outputText += reverseBrailleMap[char];
        } else {
            outputText += '❓';
        }
    }

    return outputText;
}

module.exports = translateToText;