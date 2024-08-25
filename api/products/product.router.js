const { createProduct,getProductById,getProducts,updateProduct,updateProductpro,deleteProduct,getProductByCat } = require("./product.controller");
const router = require("express").Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.patch("/", updateProduct);
router.put("/", updateProductpro);
router.delete("/", deleteProduct);
router.get("/cat/:id", getProductByCat);


module.exports = router;