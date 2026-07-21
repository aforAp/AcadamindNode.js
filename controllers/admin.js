
import { Product } from "../model/product.js";


export const getAddProduct = (req, res, next) => {
   res.render("admin/edit-product", 
   {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
   }

   );
};

export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    console.log("the user details are");
    console.log(req.user);
    const product = new Product();
    product.save().then(result => {
      console.log('created Product');
      res.redirect('/admin/products');
    }).catch(err => {
      console.log(err);
    });
//    res.redirect('/');
};

export const getEditProduct = (req, res, next) => {
   const editMode = req.query.edit;
   //"true" liek this way
   if(!editMode) {
      return res.redirect("/");
   }

   const prodId = req.params.productId;
  Product.findById(prodId)
  .then(product => {
    if (!product) {
      return res.redirect('/');
    }

    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err => console.log(err));

   
};





export const getProducts = (req, res, next) => {
   Product.fetchAll().then(products => {
res.render("admin/products", {prods: products, pageTitle: "Admin Products", path: "/admin/products"});

    }); 
}

export const postEditProduct = (req, res, next) => {
   console.log("Edit called");
   console.log(req.body);
   const prodId = req.body.productId;
   //productId was getting rom the view
   const updatedTitle = req.body.title;
   const updatedPrice = req.body.price;
   const updatedImageUrl = req.body.imageUrl;
   const updatedDesc = req.body.description;

      const product = new Product(updatedTitle, updatedPrice, updatedDesc, updatedImageUrl, prodId);

  product.save().then(result => {
    console.log('UPDATED PRODUCT!');
    res.redirect('/admin/products');
   })
   
}

export const postDeleteProduct = (req, res, next) => {
   const prodId = req.body.productId;
   Product.deleteById(prodId).then(() => {

   });
   res.redirect('/admin/products');
}