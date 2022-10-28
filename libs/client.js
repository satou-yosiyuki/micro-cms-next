import { createClient } from "microcms-js-sdk";
// const { createClient } = require("microcms-js-sdk");
require("dotenv").config();
const env = process.env;
// console.log(env.NEXT_PUBLIC_API_KEY);
// console.log("NEXT_PUBLIC_API_KEY", process.env.API_KEY);

export const client = createClient({
  serviceDomain: "satou",
  apiKey: env.NEXT_PUBLIC_API_KEY,
});

// "e60a205ae8164f0aa3d7ab8889ced7ba3304"
