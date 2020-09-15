const Product = require('../models/product')
const formidable = require('formidable');
const _ = require("lodash")
const fs = require('fs');

exports.getProductByID = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
    if (err) {
      return res.status(400).json({
        error: "Product not found in DB"
      });
    }
    req.product = product;
    next()
  })
}

exports.createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error:"Problem with image"
      })
    }

    //destructuring the fields
    const {name, description, price, category, stock}  = fields

    if (!name || !description || !category || !stock ){
      return res.status(400).json({

      })
    }
    let product = new Product(fields)

    //handle files
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error:"File too big"
        })
      }
      product.photo.data = fs.readFileSync(file.photo.path)
      product.photo.contentType = file.photo.type
    }
    //save to db
    product.save((err, product) =>{
      if (err) {
        res.status(400).json({
          error:"Not able to save in DB"
        })
      }
      res.json(product)
    })
  })
}

exports.getProduct = (req, res) => {
  req.product.photo = undefined
  return res.json(req.product)
}

exports.photo = (req, res, next) => {
  if (req.product.photo.data) {
    res.set("Content-Type", req.product.photo.contentType)
    return res.send(req.product.photo.data)
  }
  next();
}