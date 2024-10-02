const textInput = document.getElementById('textInput');
const vozBtn = document.getElementById('vozBtn');
const dictadoBtn = document.getElementById('dictadoBtn');
const aumentarTxt = document.getElementById('aumentarBtn');
const disminuirTxt = document.getElementById('disminuirBtn');
const cambiarContraste = document.getElementById('contrasteBtn');
const status = document.getElementById('status');
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
});

disminuirTxt.addEventListener('click', () => {
    if(tamLetra > 12){
        tamLetra -= 2;
        document.body.style.fontSize = tamLetra + 'px';
    }
});

cambiarContraste.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});