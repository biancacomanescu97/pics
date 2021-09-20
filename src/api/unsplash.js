import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID KhqGQv-ISUo04JB38k5u1KjZDML9TzUd1fnIJYEWGX8",
  },
});
