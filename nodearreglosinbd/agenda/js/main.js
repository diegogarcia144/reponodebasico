document.getElementById('btnBuscar').addEventListener('click',
    async () => {
        const query = document.getElementById('busqueda').value;

        const response = await fetch(`http://localhost:5000/persona?dato=${encodeURIComponent(query)}`);
        const data = await response.json();

        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '';

        if (data.length === 0) {
        resultadoDiv.textContent = 'No se encontro ninguna persona.'} else {
            data.forEach(persona => {
                resultadoDiv.innerHTML += `
                <p><strong>Nombre:</strong> ${persona.nombres}</p>
                <p><strong>Identificación:</strong> ${persona.identificacion}</p>
                <p><strong>Teléfono:</strong> ${persona.telefono}</p>
                <p><strong>Correo:</strong> ${persona.correo}</p>
                <p><strong>Fecha Nacimiento:</strong> ${persona.fechaNacimiento}</p>
                <p><strong>Sexo:</strong> ${persona.sexo}</p>
                <h/>
            `; 
        })
    }
});
