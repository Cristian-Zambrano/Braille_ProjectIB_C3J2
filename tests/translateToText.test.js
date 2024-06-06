const translateToText = require('./translateToText');

test('Traducir abecedario braile -> texto', () => {
    expect(translateToText("⠁⠃⠉⠙⠑⠋⠛⠓⠊⠚⠅⠇⠍⠝⠻⠕⠏⠟⠗⠎⠞⠥⠧⠺⠭⠽⠵")).toBe("abcdefghijklmnñopqrstuvwxyz");
});

test('Traducir numeros braile -> texto', () => {
    expect(translateToText("⠼⠁⠼⠃⠼⠉⠼⠙⠼⠑⠼⠋⠼⠛⠼⠓⠼⠊⠼⠚")).toBe("1234567890");
});

test('Traducir simbolos braile -> texto', () => {
    //Este error no se puede resolver, porque la profesora nos dió un alfabeto con caracteres que se repiten
    expect(translateToText('⠄⠂⠆⠒⠤⠦⠖⠖⠢⠢⠣⠜⠖⠦⠶⠲⠤')).toBe(".,;:_\"!¡¿?()+*=÷-");
});


