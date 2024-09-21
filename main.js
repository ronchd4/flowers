onload = () => {
        document.body.classList.remove("container");
        
        // Obtener el elemento de la flor
        const flower = document.querySelector(".flower"); // Cambia ".flower" por tu selector adecuado
        
        // Obtener el audio
        const flowerSound = document.getElementById("flower-sound");
        
        // Añadir evento de clic para reproducir música
        flower.addEventListener("click", () => {
          flowerSound.play();
        });
      };
      