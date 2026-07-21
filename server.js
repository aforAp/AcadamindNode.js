import express from "express";
import bodyParser from "body-parser"; 
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import {fileURLToPath} from 'url';
import path from "path";
import {engine} from "express-handlebars";
import { get404 } from "./controllers/error.js";
import mongoose from "mongoose";
import { User } from "./model/user.js";
const app = express();


const PORT = 3005;
app.set("view engine", "ejs");
app.set("views", "views");
//app.set('view engine', 'pug');
app.set('views', 'views');
//views folder is the default folder for the pug templates

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
    User.findById('6a5cb0ff85d137c08bd53c72')
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next();
      console.log("the middleware was running!!!");
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(get404);

mongoose.connect('mongodb://127.0.0.1:27017/shop').then(result => {
  app.listen(3000);
}).catch(err => {
  console.log(err);
})

//listen it will create the httpServer internally

