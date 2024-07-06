/**
 * Escuchador de eventos para imprimir el Braille En espejo
 */
document.getElementById('saveTXTButton').addEventListener('click', ()=> {
    localStorage.setItem('translatedText',document.getElementById('brailleOutput').textContent ); // Almacenar en localStorage
    window.location.href = './printMirror.html'; // Cambiar a la página de destino
    
});


/**
 * Escuchador de eventos para imprimir el Braille En espejo
 */
document.getElementById('saveTXTButtonNormal').addEventListener('click', ()=> {
    localStorage.setItem('translatedText', document.getElementById('brailleOutput').textContent); // Almacenar en localStorage
    window.location.href = './print.html'; // Cambiar a la página de destino
 
});
