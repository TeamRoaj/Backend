const express = require('express')
const app = express()
const User = require('./models/user');
const port = 3000
const react = import('../Frontend-dev/frontend/src/App.js')
const cors = require("cors");
const router = express.Router()
const bodyParser = require("body-parser");


app.use(cors());
app.use("/", router);
app.use(require("body-parser").json())

app.use(function(req, res, next) { res.header("Access-Control-Allow-Origin", "*"); res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next(); }); 
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

require('./data/app-db');

app.get('/', (req,res) => {
  res.send('hello world');
});


app.post('/saveWallet',(req,res) => {
  // prints out wallet address
  console.log("Data: " + JSON.stringify(req.body.address));

  //saves walletAddress
  const user = new User({"walletAddress": req.body.address, "verified":true})

  user
        .save()
        .then(() => {
        
        }).catch((err) => {
          console.log(err);
        });
  
  });



app.listen(port, () => {
  console.log(`NFT-Verify listening on port ${port}`)
})

