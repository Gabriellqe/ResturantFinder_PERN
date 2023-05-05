const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getSingleRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurants.controller.js");

router.route("/").get(getAllRestaurants).post(createRestaurant);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

module.exports = router;
