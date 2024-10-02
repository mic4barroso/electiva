const textInput = document.getElementById('textInput');
const speakBtn = document.getElementById('speakBtn');
const dictateBtn = document.getElementById('dictateBtn');
const status = document.getElementById('status');

// Sintetizador de voz
speakBtn.addEventListener('click', () => {
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

    dictateBtn.addEventListener('click', () => {
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
    dictateBtn.disabled = true;
    status.textContent = "El reconocimiento de voz no es soportado en este navegador.";
}
