import { createClient } from "microcms-js-sdk";
require("dotenv").config();
// let apiKey;
// if (process.env.API_KEY !== undefined) {
//   apiKey = process.env.API_KEY;
// }

export const client = createClient({
  serviceDomain: "satou",
  apiKey: process.env.API_KEY,
});
