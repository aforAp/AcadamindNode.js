import express from "express";
import {fileURLToPath} from 'url';
import path from "path";
import {__dirnames} from "../util/path.js";
import { getAddProduct, postAddProduct, getProducts, getEditProduct, postEditProduct, postDeleteProduct } from "../controllers/admin.js";

const router = express.Router();
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
router.get('/add-product', getAddProduct);
router.get('/products', getProducts);
router.post('/add-product', postAddProduct);
router.get('/edit-product/:productId', getEditProduct);
 router.post('/edit-product', postEditProduct);
router.post('/delete-product', postDeleteProduct);

router.get('/test', (req, res) => {
  res.send('Admin route is working');
});

export default router;