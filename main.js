const textInput = document.getElementById('textInput');
const vozBtn = document.getElementById('vozBtn');
const dictadoBtn = document.getElementById('dictadoBtn');
const aumentarTxt = document.getElementById('aumentarBtn');
const disminuirTxt = document.getElementById('disminuirBtn');
const cambiarContraste = document.getElementById('contrasteBtn');
const status = document.getElementById('status');
const copiar = document.getElementById("copiar");
const pegar = document.getElementById("pegar");
let tamLetra = 16;

// Sintetizador de voz
vozBtn.addEventListener('click', () => {
    const text = textInput.value;
    if (text) {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    } else {
        status.textContent = "Por favor, ingresa texto para leer.";
    }
});

// Reconocimiento de voz
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    dictadoBtn.addEventListener('click', () => {
        recognition.start();
        status.textContent = "Escuchando...";
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        textInput.value = transcript;
        status.textContent = "Texto dictado: " + transcript;
    };

    recognition.onerror = (event) => {
        status.textContent = "Error al reconocer: " + event.error;
    };
} else {
    dictadoBtn.disabled = true;
    status.textContent = "El reconocimiento de voz no es soportado en este navegador.";
}

aumentarTxt.addEventListener('click', () => {
    tamLetra += 2;
    document.body.style.fontSize = tamLetra + 'px';

    textInput.style.fontSize = tamLetra + 'px';

});

disminuirTxt.addEventListener('click', () => {
    if(tamLetra > 12){
        tamLetra -= 2;
        document.body.style.fontSize = tamLetra + 'px';
        textInput.style.fontSize = tamLetra + 'px';
    }
});

cambiarContraste.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');

});



copiar.addEventListener('click', () => {

    const text = textInput.value;
    if (text) {
        textInput.select();
        document.execCommand('copy');
        status.textContent = "Texto copiado al portapapeles";
    } else {
        status.textContent = "No hay texto para ser copiado.";
    }
});

pegar.addEventListener('click', () => {
    navigator.clipboard.readText().then(text => {
        textInput.value = text;
        status.textContent = "Texto pegado.";
    });
});




copiar.addEventListener('mouseover', () => {

    const textoCopiar=  copiar.textContent;


    if (textoCopiar) {
        const utterance = new SpeechSynthesisUtterance(textoCopiar);
        window.speechSynthesis.speak(utterance);
    } 
});


pegar.addEventListener('mouseover', () => {

    const textoPegar=  pegar.textContent;

    if (textoPegar) {
        const utterance = new SpeechSynthesisUtterance(textoPegar);
        window.speechSynthesis.speak(utterance);
    } 
});



vozBtn.addEventListener('mouseover', () => {

    const textoVoz=  vozBtn.textContent;

    if (textoVoz) {
        const utterance = new SpeechSynthesisUtterance(textoVoz);
        window.speechSynthesis.speak(utterance);
    } 
});


dictadoBtn.addEventListener('mouseover', () => {

    const textoDictado=  dictadoBtn.textContent;

    if (textoDictado) {
        const utterance = new SpeechSynthesisUtterance(textoDictado);
        window.speechSynthesis.speak(utterance);
    } 
});


aumentarTxt.addEventListener('mouseover', () => {

    const textoAumentar=  aumentarTxt.textContent;

    if (textoAumentar) {
        const utterance = new SpeechSynthesisUtterance(textoAumentar);
        window.speechSynthesis.speak(utterance);
    } 
});


disminuirTxt.addEventListener('mouseover', () => {

    const textoDisminuir=  disminuirTxt.textContent;

    if (textoDisminuir) {
        const utterance = new SpeechSynthesisUtterance(textoDisminuir);
        window.speechSynthesis.speak(utterance);
    } 
});


cambiarContraste.addEventListener('mouseover', () => {

    const textoContraste=  cambiarContraste.textContent;

    if (textoContraste) {
        const utterance = new SpeechSynthesisUtterance(textoContraste);
        window.speechSynthesis.speak(utterance);
    } 
});