const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).send({message:"welcome to online food ordering website!"})
});


module.exports = router;
