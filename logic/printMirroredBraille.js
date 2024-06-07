/**
 * Escuchador de eventos para imprimir el Braille En espejo
 */
document.getElementById('saveTXTButton').addEventListener('click', function() {
    printMirroredBraille(document.getElementById('brailleOutput').textContent);
});

/**
 * Función para imprirmir el texto Braille en espejo
 * Guarda el texto en almacenamiento del navegador y se lo pasa a otro documento print.html
 * @param {String} textToPrint - El texto que se quiere imprimir
 */
function printMirroredBraille(textToPrint) {
    localStorage.setItem('translatedText', textToPrint); // Almacenar en localStorage
    window.location.href = './print.html'; // Cambiar a la página de destino
    
}
