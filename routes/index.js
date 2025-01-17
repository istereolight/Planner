const { error } = require('console');
const express = require('express');
const fs = require('fs');
const router = express.Router();


router.post('/update', (req, res) => {
  const {cells} = req.body;
  if (!cells) {
    return res.status(400).json({error: 'Заполните все поля!'})
  }
  try {
    fs.writeFileSync('./database/data.json', cells);
    res.status(200).json({status: 'success'})
  } catch(error) {
    console.error('Error in cells update', error)
    res.status(500).json({error: 'Internal server error'})
  }
  
})

router.get('/get', (req, res) => {
  try {
    const json = fs.readFileSync('./database/data.json')
    res.send(json);
  } catch {
    console.error('Error in cells update', error)
    res.status(500).json({error: 'Internal server error'})
  }
  
})


module.exports = router;