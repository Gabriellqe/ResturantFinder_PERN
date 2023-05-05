const db = require("../db");

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await db.query("select * from restaurants");
    res.status(200).json({
      status: "success",
      results: restaurants.rows.length,
      data: {
        restaurants: restaurants.rows,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await db.query(
      "select * from restaurants where id = $1",
      [id]
    );
    res.status(200).json({
      status: "succes",
      data: {
        restaurant: restaurant.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;

  try {
    const results = await db.query(
      "INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *",
      [name, location, price_range]
    );

    res.status(201).json({
      status: "succes",
      data: {
        restaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRestaurant = async (req, res) => {
  const { name, location, price_range } = req.body;
  const { id } = req.params;
  try {
    const results = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
      [name, location, price_range, id]
    );

    res.status(200).json({
      status: "succes",
      data: {
        retaurant: results.rows[0],
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const results = db.query("DELETE FROM restaurants where id = $1", [id]);
    res.status(204).json({ status: "sucess" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllRestaurants,
  getSingleRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
