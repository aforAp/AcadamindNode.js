import express from "express";
import bodyParser from "body-parser"; 
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import {fileURLToPath} from 'url';
import path from "path";
import {engine} from "express-handlebars";
import { get404 } from "./controllers/error.js";
const app = express();


app.set("view engine", "ejs");
app.set("views", "views");
//app.set('view engine', 'pug');
app.set('views', 'views');
//views folder is the default folder for the pug templates

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(get404);

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});

//listen it will create the httpServer internally

