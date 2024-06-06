const translateToText = require('../logic/translateToText');

test('Traducir abecedario braile -> texto', () => {
    expect(translateToText("⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠻⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵")).toBe("abcdefghijklmnñopqrstuvwxyz");
});

test('Traducir numeros braile -> texto', () => {
    expect(translateToText("⠼⠁⠼⠃⠼⠉⠼⠙⠼⠑⠼⠋⠼⠛⠼⠓⠼⠊⠼⠚")).toBe("1234567890");
});

test('Traducir simbolos braile -> texto', () => {
    expect(translateToText('⠄ ⠂ ⠆ ⠒ ⠤ ⠦ ⠖ ⠖ ⠢ ⠢ ⠣ ⠜ ⠐⠖ ⠐⠦ ⠐⠶ ⠐⠌ ⠐⠤')).toBe(". , ; : _ \" ¡ ! ¿ ? ( ) + * = ÷ -");
});


