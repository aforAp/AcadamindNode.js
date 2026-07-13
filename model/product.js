import fs from "fs";
import path from "path";
import { rootDir } from "../util/path.js";

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
   constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
   }
save() {
  this.id = Math.random().toString();
    getProductsFromFile(products => {
        products.push(this);
        //first this get the data for the single products, later it trigger the call back
        //check the file if it have additional data just again push this will tirgeer to add the same.
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
    });
   
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