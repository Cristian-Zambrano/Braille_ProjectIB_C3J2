/**
 * Importa el método para enviar el resultado de braile de showResults.js
 * @module showResults
 */
import { sendResultBraille } from './showResults.js';
/**
 * Importa el método autoResize de showResults.js
 * @module showResults
 */
import { autoResize } from './showResults.js';
/**
 * Importa el método de sendResultText de showResults.js
 * @module showResults
 */
import { sendResultText } from './showResults.js';
/**
 * Añade un manejador de eventos al botón 'translateToBrailleButton'.
 * Cuando se hace clic en el botón, se ejecuta la función 'sendResultBraille' con el valor del elemento con id 'textInput' como argumento.
 */
document.getElementById('textInput').addEventListener('input', function() {
    sendResultBraille(document.getElementById('textInput').value);
});

/**
 * En este apartado se obtiene el texto en braille que se desea traducir.
 */
document.getElementById('brailleKeyboard').addEventListener('click',function(){
    sendResultText(document.getElementById('brailleTextInput').value);
});


/**
 * Añade un manejador de eventos al elemento de entrada de texto con id 'textInput'.
 * Cuando se introduce texto en el elemento, se ejecuta la función 'autoResize'.
 */
document.getElementById('textInput').addEventListener('input', autoResize);
