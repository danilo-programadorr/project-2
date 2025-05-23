const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  res.json({ 
    status: 'Online com Node.js ' + process.version,
    message: 'Agora funcionando no PowerShell!'
  });
});

app.listen(3001, () => {
  console.log('\x1b[36m%s\x1b[0m', ' Servidor rodando na porta 3001');
  console.log('\x1b[33m%s\x1b[0m', 'Acesse: http://localhost:3001/api/test');
});
