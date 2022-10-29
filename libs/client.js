import { createClient } from "microcms-js-sdk";
require("dotenv").config();
const env = process.env;

export const client = createClient({
  serviceDomain: "satou",
  apiKey: env.NEXT_PUBLIC_API_KEY,
});
