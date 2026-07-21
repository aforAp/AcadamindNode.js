/*
import { getDb } from "../util/database.js";
import mongodb from "mongodb";

const ObjectId = mongodb.ObjectId;
export class User {
    constructor(username, email, cart, id) {
        this.name = username;
        this.email = email;
        this.cart = cart;
        this._id = id;
    }

    save() {
      const db = getDb();
      return db.collection('users').insertOne(this);
    }
    
    addToCart(product) {
       const cartProduct = this.cart.items.findIndex(cp => {
        return cp._id === product._id;
       });
       const updatedCart = {items: [{...product, quantity: 1}]};
       //initial product adding there is no existing products
       const db = getDb();
       return db.collection('users').updateOne({_id: new ObjectId(this._id)}, {
        $set: {cart: updatedCart}
       })
    }
    static findById(userId) {
      const db = getDb();
      return db.collection('users').findOne({_id: new ObjectId(userId)}).then(user => {
        return user;
      }).catch(err => {
        console.log(err);
      }); 
      //find is the cursor it will act liek a pointer shows you the list of doucments next() helps to
      //return the only one document from that list.
    }
}
*/