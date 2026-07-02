import express from "express";

const app = express();
app.use('/add-product', (req, res, next) => {
    res.send(`Hello from the server! ${2 + 2}`);
    console.log("the console log is working");

})

app.use('/', (req, res, next) => {
    console.log("the console log is working");
    res.send(`Hello from`);

});

app.listen(3005, () => {
    console.log("Server is running on port 3005");
});

//listen it will create the httpServer internally

