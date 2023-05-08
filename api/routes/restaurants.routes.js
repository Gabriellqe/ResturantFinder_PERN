const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getSingleRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  addReview,
} = require("../controllers/restaurants.controller.js");

router.route("/").get(getAllRestaurants).post(createRestaurant);
router
  .route("/:id")
  .get(getSingleRestaurant)
  .put(updateRestaurant)
  .delete(deleteRestaurant);

router.route("/:id/addReview").post(addReview);
module.exports = router;
