import { createClient } from "microcms-js-sdk";
require("dotenv").config();
const env = process.env;
console.log("env.API_KEY", env.API_KEY);

export const client = createClient({
  serviceDomain: "satou",
  apiKey: env.API_KEY,
});
