const express = require('express');
const router = express.Router()
const db = require('../models');
const Nft = db.Nft;


// show route
router.get('/api/:id', async (req, res) => {
    const showNft = await Nft.findById(req.params.id).populate('user')
    res.json(showNft)
})



module.exports = router