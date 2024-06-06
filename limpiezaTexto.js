document.getElementById('clearBrailleButton').addEventListener('click', clearBraille);
document.getElementById('clearTextButton').addEventListener('click', clearText);
function clearBraille() {
    document.getElementById('brailleOutput').innerText = '';
    document.getElementById('textInput').value = '';
}

function clearText() {
    document.getElementById('textOutput').innerText = '';
    document.getElementById('brailleTextInput').value = '';
}