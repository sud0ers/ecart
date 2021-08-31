var express = require('express');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
// var productHelper = require('./helpers/product-helpers')

/* GET home page. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name:"iphone11",
      category:"mobile",
      image:"https://unsplash.com/photos/A6JxK37IlPo/download?force=true",
      price:"75000"
    }
  ]
  res.render('admin/view-product',{products,admin:false})
});

router.get('/add-product', function(req, res, next){
  res.render('admin/add-product')
})

router.post('/admin/add-product', function(req,res){
  console.log(req.body);
  console.lof(req.files.image);

  productHelpers.addProduct(req.body,(id)=>{
    let image = req.files.Image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
        console.log(err);
      }
    })
  })
})

module.exports = router;
