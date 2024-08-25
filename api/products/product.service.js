const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into products(p_ename, p_fname, p_unit, p_img, o_price, rsn_cd, state, create_dt)
                     values(?,?,?,?,?,?,?,?)`,
            [
                data.p_ename,
                data.p_fname,
                data.p_unit,
                data.p_img,
                data.o_price,
                data.rsn_cd,
                data.state,
                data.create_dt
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        );
    },
    getProducts: callBack => {
        pool.query(
            `select * from products`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getProductById: (id, callBack) => {
        pool.query(
            `select * from products where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getProductByCat: (id, callBack) => {
        pool.query(
            `select * from products where ca_id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateProduct: (data, callBack) => {
        pool.query(
            `update products set p_ename=?, p_fname=?, p_unit=?, p_img=?, o_price=? where id = ?`,
            [
                data.p_ename,
                data.p_fname,
                data.p_unit,
                data.p_img,
                data.o_price,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateProductpro: (data, callBack) => {
        pool.query(
            `update products set p_price=? where id = ?`,
            [
                data.p_price,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deleteProduct: (data, callBack) => {
        pool.query(
            `delete from products where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};