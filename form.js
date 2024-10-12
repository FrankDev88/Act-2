document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío real del formulario

        // Obtener el nombre del usuario desde el formulario
        const nombre = document.getElementById("nombre").value;

        // Mostrar mensaje de agradecimiento
        alert(`Gracias, ${nombre}, por contactarnos. Te responderemos pronto.`);
        
        // Limpiar el formulario después de mostrar el mensaje (opcional)
        form.reset();
    });
});
