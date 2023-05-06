import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import newRequest from "../utils/newRequest";

const AddRestaurant = () => {
  const { addRestaurants } = useContext(RestaurantsContext);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      addRestaurants(response.data.data.restaurant);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mb-4">
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-sm-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            placeholder="name"
          />
        </div>
        <div className="col-sm-3">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-control"
            type="text"
            placeholder="location"
          />
        </div>
        <div className="col-auto">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="col-auto">
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
