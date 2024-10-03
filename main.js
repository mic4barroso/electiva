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
// Nuevo código para borrar el texto
const borrar = document.getElementById("borrar");

borrar.addEventListener('click', () => {
    textInput.value = ""; // borra el contenido del textarea
    status.textContent = "Texto borrado.";
    
    // Sintetizador de voz para anunciar que se presionó el botón
    const textoBorrar = borrar.textContent;
    const utterance = new SpeechSynthesisUtterance(`${textoBorrar}`);
    window.speechSynthesis.speak(utterance);
});

// Evento de mouseover para el botón "Borrar Texto"
borrar.addEventListener('mouseover', () => {
    const textoBorrar = borrar.textContent;
    if (textoBorrar) {
        timer = setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(textoBorrar);
            window.speechSynthesis.speak(utterance);
        }, 500); // Espera 500ms antes de narrar
    }
});

//mouseover/out


let timer;


copiar.addEventListener('mouseover', () => {

    const textoCopiar=  copiar.textContent;


    if (textoCopiar) {
        timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(textoCopiar);
        window.speechSynthesis.speak(utterance);
    }, 1000);
}

});

copiar.addEventListener('mouseout', () => {
    clearTimeout(timer); 
});


pegar.addEventListener('mouseover', () => {

    const textoPegar=  pegar.textContent;

    if (textoPegar) {
        timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(textoPegar);
        window.speechSynthesis.speak(utterance);
    }, 500);
}

});

pegar.addEventListener('mouseout', () => {
    clearTimeout(timer); 
});


vozBtn.addEventListener('mouseover', () => {

    const textoVoz=  vozBtn.textContent;

    if (textoVoz) {
        timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(textoVoz);
        window.speechSynthesis.speak(utterance);
    }, 500);
}

});

vozBtn.addEventListener('mouseout', () => {
    clearTimeout(timer); 
});


dictadoBtn.addEventListener('mouseover', () => {

    const textoDictado=  dictadoBtn.textContent;

    if (textoDictado) {
        timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(textoDictado);
        window.speechSynthesis.speak(utterance);
    }, 500);
}
});

dictadoBtn.addEventListener('mouseout', () => {
    clearTimeout(timer); 
});


aumentarTxt.addEventListener('mouseover', () => {

    const textoAumentar=  aumentarTxt.textContent;

    if (textoAumentar) {
        timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(textoAumentar);
        window.speechSynthesis.speak(utterance);
    }, 500); 
    } 
});

aumentarTxt.addEventListener('mouseout', () => {
    clearTimeout(timer); 
});

disminuirTxt.addEventListener('mouseover', () => {

    const textoDisminuir=  disminuirTxt.textContent;

    if (textoDisminuir) {
        timer = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(textoDisminuir);
        window.speechSynthesis.speak(utterance);
    }, 500); 
    } 
});

disminuirTxt.addEventListener('mouseout', () => {
    clearTimeout(timer); 
});


cambiarContraste.addEventListener('mouseover', () => {
    const textoContraste = cambiarContraste.textContent;

    if (textoContraste) {
        timer = setTimeout(() => {
            const utterance = new SpeechSynthesisUtterance(textoContraste);
            window.speechSynthesis.speak(utterance);
        }, 500); 
    }
});

cambiarContraste.addEventListener('mouseout', () => {
    clearTimeout(timer); 
});