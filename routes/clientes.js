const { response } = require('express');
var express = require('express');
var router = express.Router();
const db = require('../db.js')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const conn = await db.connect();
  const clientes = conn.collection("clientes");
  const docs = await clientes.find().toArray();
  console.log(docs);
  res.render('list', { docs: docs, inserido: false });
});

router.post('/', async function(req, res, next) {
  const conn = await db.connect();
  const clientes = conn.collection("clientes");

  const nome = req.body.nome;
  const telefone = req.body.telefone;
  const uf = req.body.uf;

  await clientes.insertOne({
    nome:nome,
    telefone:telefone,
    uf:uf,
  });
  const docs = await clientes.find().toArray();
  res.render('list', { docs: docs, inserido: true });
});

router.get('/add', async function(req, res, next) {
  res.render('add');
});

router.get('/:id', async function(req, res, next){
  const conn = await db.connect();
  const clientes = conn.collection("clientes");
  const id = req.params.id
  const docs = await clientes.findById(id);

  res.console.log(docs);
});


module.exports = router;
