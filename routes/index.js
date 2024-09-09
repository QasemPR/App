const express = require('express')
const FindProduct = require('../Database/FindProduct')
const FindCategory = require('../Database/FindCatgoey')
const FindProductsById = require('../Database/FindProductsById')
const FindSlider = require('../Database/FindSlider')
const router =express.Router()

router.get('/product',FindProduct)
router.get('/category',FindCategory)
router.post('/Product-ID',FindProductsById)
router.get('/slider',FindSlider)


module.exports = router