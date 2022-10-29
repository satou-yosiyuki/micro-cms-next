import { createClient } from "microcms-js-sdk";
require("dotenv").config();
const env = process.env;

export const client = createClient({
  serviceDomain: "satou",
  apiKey: env.API_KEY,
});

