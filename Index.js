const express = require('express')
const config = require('./config/config.json');
const app = express()
const bodyparser = require('body-parser')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  console.log("Got request : /");
  console.log(Date.now() + "|" + JSON.stringify({"message":"Hii, Welcome to Basic Nodejs Docker and Kubernetes Application"}));
  res.send("<p>Hii, Welcome to Basic Nodejs Docker and Kubernetes Application</p>").status(200)
})

app.get('/date', (req, res) => {
  let today = new Date();
	console.log("Got request :/date");
  console.log(Date.now() + "|" + JSON.stringify({"message":`Hii Today is ${today}`}));
  res.send(`<p>Hii Today is ${today}</p>`).status(200)
})

app.post('/post', (req, res) => {
  let reqbody = req.body;
	console.log("Got request :/post");
  console.log(Date.now() + "|" + "Body:" + JSON.stringify(reqbody));
    res.send({
      "message":"Success",
      "ResponseCode":"1",
      "Recieved Body":req.body
    }).status(200)
})

app.listen(`${config.server.port}`, () => {
  console.log(`Example app listening at http://${config.server.host}:${config.server.port}`)
})

