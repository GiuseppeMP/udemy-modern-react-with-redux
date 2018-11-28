import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 600c50175b92741f2e95dd8c0714508aa114e5f3454c3e5e189b33403af6777d"
  }
});
