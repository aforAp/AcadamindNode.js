/*
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



import {mongoConnect, getDb} from "../util/database.js";
import mongodb from "mongodb";

export class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id): null;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    let dbOp;
    if(this._id) {
      //update the product
      dbOp = db.collection('products').updateOne({
        _id: this._id
      }, {
        $set: this
      });
    } else {

   dbOp =db.collection('products').insertOne(this);
   //just getting the database from the mongoDB.
  
     //from the db we are getting the collections
 }
  return dbOp.then(result => {
    console.log(result);
   }).catch(err => {
    console.log(err)
   });

  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray().then(products => {
      console.log(products);
      return products;
    }).catch(err => {
      console.log(err);
    });
    //find just calling without no data it will call all the data.
    //it will return the cursor not an object.
  }

  static findById(prodId) {
    const db = getDb();
    console.log("the product id was", prodId);
    return db.collection('products').find({_id: new mongodb.ObjectId(prodId)}).next().then(product => {
      console.log(product);
      return product;
    }).catch(err => {
      console.log(err);
    });
    //find which helps us to return the single product.
  }

  static deleteById(prodId) {
    const db = getDb();
    return db.collection('products').deleteOne({
      _id: new mongodb.ObjectId(prodId)}).then(result => {
        console.log("Deleted");
      }).catch(err => {
        console.log(err)
      });
  }

}
*/

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

export const Product = mongoose.model('Product', productSchema);


