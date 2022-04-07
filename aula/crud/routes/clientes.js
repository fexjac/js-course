const { response } = require('express');
var express = require('express');
var router = express.Router();
const db = require('../db.js');
ObjectID = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const conn = await db.connect();
  const clientes = conn.collection("clientes");
  const docs = await clientes.find().toArray();
  //console.log(docs);
  res.render('list', { docs: docs, inserido: false });
});

router.post('/', async function (req, res, next) {
  const conn = await db.connect();
  const clientes = conn.collection("clientes");

  const nome = req.body.nome;
  const telefone = req.body.telefone;
  const uf = req.body.uf;
  console.log(req.body);


  if (req.body.hiddenid) {
    const filter = { _id: new ObjectID(req.body.hiddenid) }
    const x = await clientes.updateOne(
      filter,
      { $set: { nome: nome, telefone: telefone, uf: uf } }
    );
  } else {
    await clientes.insertOne({
      nome: nome,
      telefone: telefone,
      uf: uf,
    });
  }
  res.redirect('/clientes');
});

router.get('/add', async function (req, res, next) {
  res.render('clientes', { lbl: "Adicionar", obj: { nome: "", telefone: "", uf: "" } });
});


router.post('/delete', async function (req, res, next) {
  const conn = await db.connect();
  const clientes = conn.collection("clientes");
  const _id = req.body.hiddenid;
  const filter = { _id: new ObjectID(_id) }

  const x = await clientes.deleteOne(filter);
  console.log(x);
  const docs = await clientes.find().toArray();
  //res.render('list', { docs: docs, inserido: false }); 
  res.redirect('/clientes');
  //res.send('clicou em delete '  + req.body.hiddenid );
});

router.post('/update', async function (req, res, next) {
  const conn = await db.connect();
  const clientes = conn.collection("clientes");
  const _id = req.body.hiddenid;
  const filter = { _id: new ObjectID(_id) }

  const ob = await clientes.findOne(filter);
  console.log(ob);
  res.render('clientes', { obj: ob, lbl: "Atualizar" });
});


module.exports = router;
