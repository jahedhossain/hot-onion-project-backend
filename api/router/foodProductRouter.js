const router = require("express").Router();
const foodProductController = require("../controller/foodProductController");

// post all foodProduct database sent
router.post("/foodProduct", foodProductController.foodProduct);
router.get("/foodProduct", foodProductController.allfoodProduct);
router.get("/foodProduct/:key", foodProductController.foodProductKey);
router.post("/foodProductKeys", foodProductController.foodProductKeys);

module.exports = router;
