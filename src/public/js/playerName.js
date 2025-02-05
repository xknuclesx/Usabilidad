document.addEventListener("DOMContentLoaded", function () {
    const playerNameInput = document.getElementById("playerName");
    const errorMessage = document.createElement("p"); // Elemento para el mensaje de error
    errorMessage.id = "error-message";
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "14px";
    errorMessage.style.marginTop = "5px";
    errorMessage.style.display = "none"; // Oculto por defecto
    errorMessage.setAttribute("tabindex", "-1"); // Permite que el mensaje reciba focus

    // Insertar el mensaje de error debajo del input
    playerNameInput.insertAdjacentElement("afterend", errorMessage);

    // Recuperar el nombre si ya está guardado en localStorage
    if (localStorage.getItem("playerName")) {
        playerNameInput.value = localStorage.getItem("playerName");
    }

    // Escuchar cambios en el input para ocultar el error cuando el usuario empiece a escribir
    playerNameInput.addEventListener("input", function () {
        if (playerNameInput.value.trim() !== "") {
            errorMessage.style.display = "none";
        }
    });

    // Función para iniciar el juego
    window.startGame = function () {
        const playerName = playerNameInput.value.trim();

        if (playerName === "") {
            errorMessage.textContent = "Por favor, ingresa tu nombre antes de jugar.";
            errorMessage.style.display = "block";

            // Enfocar el mensaje de error para que el usuario lo note
            errorMessage.focus();
            
            return;
        }

        // Guardar el nombre en localStorage
        localStorage.setItem("playerName", playerName);

        // Redirigir al juego
        window.location.href = "educativo";
    };
});
