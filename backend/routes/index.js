const express = require('express');
const router = express.Router();

// Landing Page
router.get('/', (req,res)=>{
    res.json('HAllo')
});


module.exports = router;