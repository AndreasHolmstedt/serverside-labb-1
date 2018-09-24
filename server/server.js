const express = require('express')
const app = express()
const shoes = require("./shoes.js")
const cors = require("cors")
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





app.get('/', (req, res) => res.send('Hello World!'))


app.get("/shoes", (req, res) => {
    console.log("redirect -> /shoes")
    let listOfShoes = JSON.stringify(shoes.listShoes())
    res.send(listOfShoes);
})

app.get("/shoes/remove/:shoe", (req, res) => {
  let shoe = req.params.shoe;
  console.log(`redirect -> shoes/remove/${shoe}`)
  shoes.removeShoe(shoe)
  let listOfShoes = JSON.stringify(shoes.listShoes())
  res.send(listOfShoes);
})

app.get("/shoes/add/:shoe", (req, res) => {
  let shoe = req.params.shoe;
  console.log(`redirect -> shoes/add/${shoe}`)
  shoes.addShoe(shoe)
})

app.post("/shoes/update", (req, res) => {
  const data = req.body
  console.log(req.body)
  shoes.updateShoe(data)
  res.send({ status: 'SUCCESS' });
})

app.delete("/shoes/:id", (req, res) => {
  let id = req.params.id;
  shoes.removeShoe(id)
  res.send({ status: 'SUCCESS' });
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))
