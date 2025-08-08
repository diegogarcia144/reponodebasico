document.getElementById('btn').addEventListener('click', async () => {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;

    const response = await fetch (`http://localhost:3000/multiplicar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a: num1, b: num2})
    });

    const data = await response.json();
    document.getElementById('resultado').textContent = `Resultado: ${data.resultado}`;
});