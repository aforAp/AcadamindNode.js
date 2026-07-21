import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { getIndex, getProducts, getCart, getCheckout, getOrders, getProduct, postCart, postCartDeleteProduct } from "../controllers/shop.js";
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
router.get("/", getIndex);

router.get('/products', getProducts);
 router.get('/products/:productId', getProduct);
// router.get('/cart', getCart);
 router.post('/cart', postCart);
// router.get("/checkout", getCheckout);
// router.get("/orders", getOrders);
// router.post("/cart-delete-item", postCartDeleteProduct);
export default router;