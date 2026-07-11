import express from "express";
import {fileURLToPath} from 'url';
import path from "path";
import {__dirnames} from "../util/path.js";
import { getAddProduct, postAddProduct } from "../controllers/products.js";
const router = express.Router();


const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
router.get('/add-product', getAddProduct);

router.post('/add-product', postAddProduct);

export default router;