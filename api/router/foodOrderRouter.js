const router = require("express").Router();
const foodOrderController = require("../controller/foodOrderController");

// post all foodProduct database sent
router.post("/foodOrder", foodOrderController.foodOrder);

module.exports = router;
