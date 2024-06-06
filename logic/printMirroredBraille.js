//Listener para darle accion al boton
document.getElementById('saveTXTButton').addEventListener('click', function() {
    printMirroredBraille(document.getElementById('brailleOutput').textContent);
});

//Funcion para preparar la impresion
function printMirroredBraille(textToPrint) {
    localStorage.setItem('translatedText', textToPrint); // Almacenar en localStorage
    window.location.href = './print.html'; // Cambiar a la página de destino
    
}
