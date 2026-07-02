import express from "express";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//this will parse the incoming request body and make it available in req.body via forms

app.use('/add-product', (req, res, next) => {
    console.log("the console log is working");
    res.send('<form action="/product" method="POST"><input type="text" name="username"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use((req, res, next) => {
    console.log("the console log is working 2");
    res.send("panna oru loosu 2");
})

app.listen(3010, () => {
    console.log("Server is running on port 3010");
})