document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todos los elementos navegables
    const focusableElements = document.querySelectorAll("button, a, input, [tabindex='0']");
    let currentIndex = 0;

    // Asigna el foco al primer elemento navegable
    if (focusableElements.length > 0) {
        focusableElements[0].focus();
    }

    document.addEventListener("keydown", function (event) {
        const activeElement = document.activeElement;

        // Si el usuario está en un <select>, permite la navegación normal del navegador
        if (activeElement.tagName === "SELECT") {
            return;
        }

        if (event.key === "ArrowDown") {
            event.preventDefault(); // Evita el desplazamiento de la página
            currentIndex = (currentIndex + 1) % focusableElements.length;
            focusableElements[currentIndex].focus();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            currentIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
            focusableElements[currentIndex].focus();
        }
    });

    document.addEventListener("DOMContentLoaded", function () {
        const videoIframe = document.getElementById("educationalVideo");
    
        videoIframe.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                toggleVideo();
                event.preventDefault(); // Evita comportamientos no deseados
            }
        });
    
        function toggleVideo() {
            let src = videoIframe.src;
    
            // Si el video ya está reproduciéndose, lo pausamos
            if (src.includes("autoplay=1")) {
                videoIframe.src = src.replace("autoplay=1", "autoplay=0"); // Pausa el video
            } else {
                videoIframe.src = src.includes("?")
                    ? `${src}&autoplay=1` // Agrega autoplay si ya hay parámetros en la URL
                    : `${src}?autoplay=1`; // Agrega autoplay como primer parámetro
            }
        }
    });
    
});
