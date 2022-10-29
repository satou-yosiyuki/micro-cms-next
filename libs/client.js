import { createClient } from "microcms-js-sdk";
require("dotenv").config();
const apiKey = process.env.API_KEY;
console.log("apiKey", apiKey);

export const client = createClient({
  serviceDomain: "satou",
  apiKey: apiKey,
});

//
