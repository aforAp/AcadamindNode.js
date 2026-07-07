import express from "express";
import {fileURLToPath} from 'url';
import path from "path";
import {__dirnames} from "../util/path.js";
const router = express.Router();
export const products = [];

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
router.get('/add-product', (req, res, next) => {
   res.render("add-product", {docTitle: "Add Product", path: '/admin/add-product'});
});

router.post('/add-product', (req, res, next) => {
    console.log(products);
    products.push({title: req.body.title});
    res.redirect('/');
});

export default router;