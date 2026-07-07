import express from "express";
import bodyParser from "body-parser"; 
import adminRoutes from "./routes/admin.js";
import shopRoutes from "./routes/shop.js";
import {fileURLToPath} from 'url';
import path from "path";
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
//views folder is the default folder for the pug templates

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render("404", {docTitle: "Page Not Found"});
});

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});

//listen it will create the httpServer internally

