const express = require('express');

const PORT = 3000

const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/multiplicar', (req, res) => {
    const { a, b } = req.body;
    const resultado = Number(a) * Number(b);
    res.json({ resultado })
});

app.listen(PORT, () => {
    console.log(`Api ejecutándose en http://localhost:${PORT}`)
})

