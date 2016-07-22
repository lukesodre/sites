var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());  
  
app.use(express.static(__dirname));

app.post('/', function(req, res) {
  console.log("Transacao efetuada")
  var transacao = {}
  transacao.status = "Sucesso"
  transacao.body = req.body;
  res.json(transacao);
});


app.listen(8002);
console.log("Escutando porta 8002")
