const {
    create,
    getUserById,
    getUsers,
    updateUser,
    updateUserPwd,
    deleteUser,
    getUserByEmail
} = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.pwd = hashSync(body.pwd, salt);
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
    getUserById: (req, res) => {
        const id = req.params.id;
        getUserById(id, (err, results) => {
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
    getUsers: (req, res) => {
        getUsers((err, results) => {
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
    updateUserPwd: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.pwd = hashSync(body.pwd, salt);
        updateUserPwd(body, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 200,
                message: "Update password successfully"
            });
        });
    },
    updateUser: (req, res) => {
        const id = req.body;
        updateUser(id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 200,
                message: "Update password successfully"
            });
        });
    },
    deleteUser: (req, res) => {
        const id = req.body;
        deleteUser(id, (err, results) => {
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
                message: "user delete successfully"
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 500,
                    message: "Invalid email or password"
                });
            }
            const result = compareSync(body.pwd, results.pwd);
            if(result) {
                results.pwd = undefined;
                const jsontoken = sign({ result: results}, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 200,
                    message: "login successfully",
                    token: jsontoken
                });
            } else {
                return res.json({
                    success: 404,
                    message: "Invalid email or password"
                });
            }
        });
    }
}