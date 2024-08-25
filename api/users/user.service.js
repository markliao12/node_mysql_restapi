const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(f_name, l_name, email, pwd, address, tel, rsn_cd, state, create_dt)
                     values(?,?,?,?,?,?,?,?,?)`,
            [
                data.f_name,
                data.l_name,
                data.email,
                data.pwd,
                data.address,
                data.tel,
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
    getUsers: callBack => {
        pool.query(
            `select * from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getUserById: (id, callBack) => {
        pool.query(
            `select * from users where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update users set f_name=?, l_name=?, address=?, tel=? where id = ?`,
            [
                data.f_name,
                data.l_name,
                data.address,
                data.tel,
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
    updateUserPwd: (data, callBack) => {
        pool.query(
            `update users set pwd=? where id = ?`,
            [
                data.pwd,
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
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from users where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByEmail: (email, callBack) => {
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};