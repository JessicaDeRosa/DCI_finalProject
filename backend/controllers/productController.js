const Product = require('../models/Product')
const fileUpload = require('express-fileupload');
const express = require('express');
const app = express();
// Multer setup
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },

    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});


const upload = multer({
    storage: storage

});

app.use(fileUpload());

// save/create a user account
exports.createProduct = (req, res) => {

    const newProduct = {
        product_name: req.body.product_name,
        price: req.body.price,
        description: req.body.description,
        category:req.body.category,
        checkData : req.body.checkData
    }
    console.log('test 1',newProduct)
    new Product(newProduct).save()
    .then((product)=>{
        console.log('product created')
        res.json(product)
    })
    
}

exports.findProduct = (req,res) => {
 Product.find((err,data)=>{
     console.log
     res.json(data)
     console.log(data)
 })
}

exports.uploadPicture = (req,res) => {
    if (req.files === null) {
      return res.status(400).json('file not found');
    }
  
    const file = req.files.file;
    console.log(file)
    file.mv(`${__dirname}/frontend/public/uploads/${file.name}`, err => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }
  
      res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });

}




