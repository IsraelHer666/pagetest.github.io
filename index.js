document.addEventListener('DOMContentLoaded', () => {
    const comprobar1 = document.getElementById('Comprobar1');
    const comprobar2 = document.getElementById('Comprobar2');
    const comprobar3 = document.getElementById('Comprobar3');
    const pregunta1 = document.querySelector('.pregunta1');
    const pregunta2 = document.querySelector('.pregunta2');
    const pregunta3 = document.querySelector('.pregunta3');
    const popUpcorrecto = document.querySelector('.popUpcorrecto');
    const siguiente = document.getElementById('siguiente');
    let preguntaActual = 1;
        
    comprobar1.addEventListener('click', () => {
        const respuesta = document.getElementById('respuesta1').value;
        if (respuesta === "4") {
            mostrarPopupCorrecto();
        } else {
            alert('Respuesta incorrecta. Inténtalo de nuevo.');
        }
    });
    
    comprobar2.addEventListener('click', () => {
        const respuesta = document.getElementById('respuesta2').value;
        if (respuesta === "4") {
            mostrarPopupCorrecto();
        } else {
            alert('Respuesta incorrecta. Inténtalo de nuevo.');
        }
    });
    
    comprobar3.addEventListener('click', () => {
        const respuesta = document.getElementById('respuesta3').value;
        if (respuesta === "0") {
            mostrarPopupCorrecto();
        } else {
            alert('Respuesta incorrecta. Inténtalo de nuevo.');
        }
    });
    
    siguiente.addEventListener('click', () => {
        popUpcorrecto.style.display = 'none';
        preguntaActual++;
        
        if (preguntaActual === 2) {
            pregunta1.style.display = 'none';
            pregunta2.style.display = 'flex';
        } else if (preguntaActual === 3) {
            pregunta2.style.display = 'none';
            pregunta3.style.display = 'flex';
        } else if (preguntaActual === 4) {
            // Mostrar la pregunta sorpresa
            mostrarPreguntaSorpresa();
        }
    });
    
    function mostrarPopupCorrecto() {
        popUpcorrecto.style.display = 'flex';
    }
    
    function mostrarPreguntaSorpresa() {
        // Ocultar todo y mostrar la sorpresa
        pregunta3.style.display = 'none';
        document.querySelector('.preguntas').innerHTML = `
            <div class="pregunta-sorpresa">
                <h1>💕 ¡Sorpresa! 💕</h1>
                <p>Después de todas estas preguntas, tengo una pregunta muy especial para ti...</p>
                <h2>¿Quieres ser mi novia? 💖</h2>
                <p class="mensaje-persuasivo">¡Solo hay una respuesta correcta! 😉</p>
                <div class="respuestas-sorpresa">
                    <button id="siBtn" class="btn-si">¡SÍ! 💕</button>
                    <button id="noBtn" class="btn-no">No 😔</button>
                </div>
            </div>
        `;
        
        document.getElementById('siBtn').addEventListener('click', () => {
            document.querySelector('.preguntas').innerHTML = `
                <div class="respuesta-si">
                    <h1>🎉 ¡SÍ! 🎉</h1>
                    <p>¡Me haces el hombre más feliz del mundo! 💕</p>
                    <p>¡Ahora somos novios! 💖</p>
                </div>
            `;
        });
        
        // Hacer que el botón "No" no funcione
        document.getElementById('noBtn').addEventListener('click', () => {
            // El botón se mueve aleatoriamente para evitar que lo presionen
            const noBtn = document.getElementById('noBtn');
            const container = document.querySelector('.respuestas-sorpresa');
            const containerRect = container.getBoundingClientRect();
            
            // Generar posición aleatoria dentro del contenedor
            const randomX = Math.random() * (containerRect.width - 120);
            const randomY = Math.random() * (containerRect.height - 50);
            
            noBtn.style.position = 'absolute';
            noBtn.style.left = randomX + 'px';
            noBtn.style.top = randomY + 'px';
            noBtn.style.transform = 'none';
            
            // Cambiar el texto para ser más persuasivo
            noBtn.textContent = '¡Piénsalo bien! 💕';
            
            // Después de un tiempo, volver a la posición normal
            setTimeout(() => {
                noBtn.style.position = 'static';
                noBtn.style.left = 'auto';
                noBtn.style.top = 'auto';
                noBtn.style.transform = 'none';
                noBtn.textContent = 'No 😔';
            }, 2000);
        });
    }
});
