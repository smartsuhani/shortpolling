const {Router} = require('express');
const router= Router();

router.get('/',(req,res)=>{
  const id = req.query.params;
  if (id === 6) {
    res.status(200).send({generated: true});
  } else {
    res.status(200).send({generated: false})
  }
});

module.exports=router;
