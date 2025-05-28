const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/expressao', (req, res) => {
  const { expressao, timestamp } = req.body;
  console.log(`Expressão recebida: ${expressao} às ${timestamp}`);
  // Aqui você pode salvar no banco de dados se quiser
  res.status(200).send({ message: "Expressão recebida com sucesso!" });
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
