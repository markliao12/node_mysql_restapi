const { getProductByCat } = require("./product.controller");
const router = require("express").Router();

router.get("/:id", getProductByCat);


module.exports = router;