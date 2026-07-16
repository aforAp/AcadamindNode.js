import fs from "fs";
import path from "path";
import { rootDir, __dirnames } from "../util/path.js";
import { Cart } from "./cart.js";
const products = [];
const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {

  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {

      cb(JSON.parse(fileContent));
    }
    //objects are going to change like in the form of JSON using the above.
  })
}

export class Product {
   constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
   }

static deleteById(id) {
  getProductsFromFile(products => {
    const product = products.find(prod => prod.id === id);
    const updatedProducts = products.filter(p => p.id !== id);
    fs.writeFile(p, JSON.stringify(updatedProducts), err => {
      if(!err) {
         Cart.deleteProduct(updatedProducts.id, product.price);
      }
    });
  })

}
save() {
    getProductsFromFile(products => {
      if(this.id) {
   const existingProductIndex = products.findIndex(prod => prod.id === this.id);
   const updatedProducts = [...products];
   updatedProducts[existingProductIndex] = this;
   fs.writeFile(p, JSON.stringify(updatedProducts), err => {
          console.log(err);
        });
   //this was the updated product will be pushed to the index

  } else {
this.id = Math.random().toString();
        products.push(this);
        //first this get the data for the single products, later it trigger the call back
        //check the file if it have additional data just again push this will tirgeer to add the same.
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
  }
        
 
})
}
static fetchAll(cb) {
  getProductsFromFile(cb);
}


static findById(id, cb) {
  getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
  });
   }
}



//when using the static key word in front of the function we can class this method like below
//Product.fetchAll() 