import { createClient } from "microcms-js-sdk";
require("dotenv").config();

export const client = createClient({
  serviceDomain: "satou",
  apiKey: process.env.API_KEY,
});
