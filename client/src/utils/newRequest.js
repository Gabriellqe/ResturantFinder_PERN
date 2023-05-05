import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:5000/api/v1/restaurants",
});

export default newRequest;
