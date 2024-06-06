document.getElementById('saveTXTButton').addEventListener('click', function() {
    printMirroredBraille(document.getElementById('brailleOutput').textContent);
});

function printMirroredBraille(textToPrint) {
    localStorage.setItem('translatedText', textToPrint); // Almacenar en localStorage
    window.location.href = './print.html'; // Cambiar a la página de destino
}
