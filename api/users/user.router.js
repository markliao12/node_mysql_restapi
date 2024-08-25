const { createUser, getUserById, getUsers, updateUser,updateUserPwd,deleteUser,login } = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createUser);
router.get("/", checkToken, getUsers);
router.get("/:id", checkToken, getUserById);
router.patch("/", checkToken, updateUser);
router.put("/", checkToken, updateUserPwd);
router.delete("/", checkToken, deleteUser);
router.post("/login", login);


module.exports = router;

