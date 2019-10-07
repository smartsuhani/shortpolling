var express=require('express');
var bodyparser=require('body-parser');
var app = express();
var cors = require('cors');

app.get('/shortpoll/:id',(req,res)=>{
  const id = req.params.id;
  console.log('id', req.params.id);
  if (id === '15') {
    res.status(200).send({generated: true});
  } else {
    res.status(200).send({generated: false})
  }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());

app.listen(3004, (err) => {
  if (err) {
    console.log('Error in connecting with port 3004', err);
  } else {
    console.log('Server has been set up on port 3004');
  }
});
