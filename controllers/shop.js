import { Product } from "../model/product.js";
import { Cart } from "../model/cart.js";

export const getProducts = (req, res, next) => {
  Product.fetchAll(products => {
res.render("shop/product-list", {prods: products, pageTitle: "All Products", path: "/products"});

    });
    };

export const getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    console.log(product);
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products'
    });
  })

}

export const getIndex = (req, res, next) => {
  Product.fetchAll().then(products => {
res.render("shop/index", {prods: products, pageTitle: "Shop", path: "/"});

    });
} 


export const getCart = (req, res, next) => {
  Cart.getProducts(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
       for (let product of products){
        const cartProductData = cart.products.find(prod => prod.id === product.id);
        if(cart.products.find(prod => prod.id === product.id)){
           cartProducts.push({productData: product, qty: cartProductData.qty});
        }
      }
    res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart',
    products: cartProducts
  }); 
    });

   
  });
  
}

export const getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  })
};


export const getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};


export const postCart = (req, res, next) => {
  const prodId = req.body.productId;
  console.log("the product id", prodId);
  Product.findById(prodId).then(product => {
    return req.user.addToCart(product);
    //req.user means requesting full user model
  }).then(result => {
    console.log(result);
  })
  console.log(prodId);
  res.redirect('/cart');
};

export const postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {

    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};
