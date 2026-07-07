import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import {products} from "./admin.js";
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.get("/", (req, res, next) => {
    console.log(products);
    res.render("shop", {prods: products, docTitle: "Shop", path: "/"});
});

export default router;