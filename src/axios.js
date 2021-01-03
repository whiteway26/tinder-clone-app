import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-side.herokuapp.com",
});

export default instance;
