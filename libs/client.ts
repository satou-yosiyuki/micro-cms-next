import { createClient } from "microcms-js-sdk";
require("dotenv").config();
const apikey = process.env.API_KEY;

export const client = createClient({
  serviceDomain: "satou",
  apiKey: apikey,
});
