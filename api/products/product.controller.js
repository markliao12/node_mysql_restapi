const {
    create,
    getProductById,
    getProducts,
    updateProduct,
    updateProductpro,
    deleteProduct,
    getProductByCat
} = require("./product.service");

module.exports = {
    createProduct: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 500,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 200,
                data: results
            });
        });
    },
    getProductById: (req, res) => {
        const id = req.params.id;
        getProductById(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 404,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 200,
                data: results
            });
        });
    },
    getProductByCat: (req, res) => {
        const id = req.params.id;
        getProductByCat(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 404,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 200,
                data: results
            });
        });
    },
    getProducts: (req, res) => {
        getProducts((err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 404,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 200,
                data: results
            });
        });
    },
    updateProduct: (req, res) => {
        const body = req.body;
        updateProduct(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 200,
                message: "Update Product successfully"
            });
        });
    },
    updateProductpro: (req, res) => {
        const id = req.body;
        updateProductpro(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 200,
                message: "Update Product price successfully"
            });
        });
    },
    deleteProduct: (req, res) => {
        const id = req.body;
        deleteProduct(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 404,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 200,
                message: "product delete successfully"
            });
        });
    }
}