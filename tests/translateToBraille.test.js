const translateToBraile = require('./translateToBraille');

test('Traducir abecedario texto -> braile', () => {
    expect(translateToBraile("abcdefghijklmnñopqrstuvwxyz")).toBe("⠁ ⠃ ⠉ ⠙ ⠑ ⠋ ⠛ ⠓ ⠊ ⠚ ⠅ ⠇ ⠍ ⠝ ⠻ ⠕ ⠏ ⠟ ⠗ ⠎ ⠞ ⠥ ⠧ ⠺ ⠭ ⠽ ⠵ ");
});

test('Traducir numeros texto -> braile', () => {
    expect(translateToBraile("1234567890")).toBe("⠼⠁ ⠼⠃ ⠼⠉ ⠼⠙ ⠼⠑ ⠼⠋ ⠼⠛ ⠼⠓ ⠼⠊ ⠼⠚ ");
});

test('Traducir simbolos texto -> braile', () => {
    expect(translateToBraile('.,;:_"!¡¿?()+*=÷-')).toBe("⠄ ⠂ ⠆ ⠒ ⠤ ⠦ ⠖ ⠖ ⠢ ⠢ ⠣ ⠜ ⠖ ⠦ ⠶ ⠲ ⠤ ");
});


