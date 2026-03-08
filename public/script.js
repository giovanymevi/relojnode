// Se ejecuta cuando todo el contenido del DOM está cargado
document.addEventListener('DOMContentLoaded', () => {
    
    const clockElement = document.getElementById('clock');

    // Función para actualizar el reloj
    function updateClock() {
        const now = new Date();

        // Obtenemos las horas, minutos y segundos
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        // Actualizamos el contenido del elemento del reloj
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Llamamos a updateClock() una vez al inicio para no esperar 1 segundo
    updateClock();

    // Establecemos un intervalo para que la función se ejecute cada segundo (1000 ms)
    setInterval(updateClock, 1000);
});
