import { createClient } from "microcms-js-sdk";
// require("dotenv").config();
const { API_KEY } = process.env;

export const client = createClient({
  serviceDomain: "satou",
  apiKey: API_KEY,
});

// "e60a205ae8164f0aa3d7ab8889ced7ba3304"
