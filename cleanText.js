/**
 * Añade manejadores de eventos a los botones para limpiar las entradas y salidas de Braille y texto.
 */

/**
 * Añade un manejador de eventos al botón 'clearBrailleButton'.
 * Cuando se hace clic en el botón, se ejecuta la función 'clearBraille'.
 */
document.getElementById('clearBrailleButton').addEventListener('click', clearBraille);

/**
 * Añade un manejador de eventos al botón 'clearTextButton'.
 * Cuando se hace clic en el botón, se ejecuta la función 'clearText'.
 */
document.getElementById('clearTextButton').addEventListener('click', clearText);

/**
 * Limpia la salida de Braille y la entrada de texto.
 * Establece el texto del elemento con id 'brailleOutput' y el valor del elemento con id 'textInput' a una cadena vacía.
 */
function clearBraille() {
    document.getElementById('brailleOutput').innerText = '';
    document.getElementById('textInput').value = '';
}

/**
 * Limpia la salida de texto y la entrada de Braille.
 * Establece el texto del elemento con id 'textOutput' y el valor del elemento con id 'brailleTextInput' a una cadena vacía.
 */
function clearText() {
    document.getElementById('textOutput').innerText = '';
    document.getElementById('brailleTextInput').value = '';
}
