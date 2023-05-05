import React from "react";

const AddRestaurant = () => {
  return (
    <div className="mb-4">
      <form className="row gy-2 gx-3 align-items-center">
        <div className="col-sm-3">
          <input type="text" className="form-control" placeholder="name" />
        </div>
        <div className="col-sm-3">
          <input type="text" className="form-control" placeholder="location" />
        </div>
        <div className="col-auto">
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue={1}
          >
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRestaurant;
