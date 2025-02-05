document.addEventListener("DOMContentLoaded", function () {
    const difficultyButtons = document.querySelectorAll(".difficulty-button");
    const difficultyMessage = document.getElementById("difficultyMessage");
    const difficultyText = document.getElementById("difficultyText");
    const confirmDifficulty = document.getElementById("confirmDifficulty");
    const pageContent = document.querySelector(".game-container");

    // Crear el botón de cancelar si no existe
    let cancelButton = document.getElementById("cancelDifficulty");
    if (!cancelButton) {
        cancelButton = document.createElement("button");
        cancelButton.id = "cancelDifficulty";
        cancelButton.textContent = "Cancelar";
        cancelButton.classList.add("cancel-button");

        // Contenedor para alinear los botones
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        // Insertar los botones en el contenedor
        buttonContainer.appendChild(confirmDifficulty);
        buttonContainer.appendChild(cancelButton);
        
        // Agregar el contenedor debajo del mensaje
        difficultyMessage.appendChild(buttonContainer);
    }

    let selectedTime = null;

    console.log("✅ Script cargado correctamente");

    // Evento para seleccionar dificultad
    difficultyButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedTime = this.getAttribute("data-time");
            const difficultyTextContent = this.innerText.split("\n")[0];

            // Resaltar el botón seleccionado
            difficultyButtons.forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");

            console.log(`🟢 Dificultad seleccionada: ${difficultyTextContent} con ${selectedTime} segundos`);

            // Mostrar mensaje de confirmación
            difficultyText.innerHTML = `
                Has seleccionado: <strong>${difficultyTextContent}</strong><br>
                Presiona "Comenzar" para iniciar o "Cancelar" para volver.
            `;

            difficultyMessage.classList.remove("hidden");
            difficultyMessage.setAttribute("aria-hidden", "false");
            difficultyMessage.setAttribute("tabindex", "0");

            // Desenfocar el fondo para mejorar experiencia de usuario
            pageContent.classList.add("blur-background");
            pageContent.setAttribute("aria-hidden", "true");

            // Transferir el foco al botón "Comenzar" para accesibilidad
            setTimeout(() => confirmDifficulty.focus(), 100);
        });
    });

    // Evento para confirmar la dificultad y comenzar el juego
    confirmDifficulty.addEventListener("click", function () {
        if (selectedTime) {
            localStorage.setItem("questionTime", selectedTime);
            console.log("🚀 Dificultad confirmada:", selectedTime);

            // Restaurar accesibilidad de la página
            difficultyMessage.classList.add("hidden");
            difficultyMessage.setAttribute("aria-hidden", "true");
            pageContent.classList.remove("blur-background");
            pageContent.setAttribute("aria-hidden", "false");

            // Redirigir al juego
            window.location.href = "/juego";
        }
    });

    // Evento para cancelar la selección de dificultad
    cancelButton.addEventListener("click", function () {
        console.log("❌ Selección de dificultad cancelada.");

        // Ocultar mensaje de confirmación
        difficultyMessage.classList.add("hidden");
        difficultyMessage.setAttribute("aria-hidden", "true");

        // Restaurar accesibilidad de la página
        pageContent.classList.remove("blur-background");
        pageContent.setAttribute("aria-hidden", "false");

        // Quitar la selección del botón
        difficultyButtons.forEach(btn => btn.classList.remove("selected"));

        // Regresar el foco al primer botón de dificultad
        setTimeout(() => difficultyButtons[0].focus(), 100);
    });
});
