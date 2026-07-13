import { Product } from "../model/product.js";

export const getAddProduct = (req, res, next) => {
   res.render("admin/add-product", 
   {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
   }

   );
};

export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    console.log(imageUrl);

    const product = new Product(title, imageUrl, price, description);
    product.save();
    res.redirect('/');
};


export const getProducts = (req, res, next) => {
   Product.fetchAll(products => {
res.render("admin/products", {prods: products, pageTitle: "Admin Products", path: "/"});

    }); 
}