import { createClient } from "microcms-js-sdk";
require("dotenv").config();
const { API_KEY } = process.env;

export const client = createClient({
  serviceDomain: "satou",
  apiKey: API_KEY,
});
