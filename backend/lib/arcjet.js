import arcjet, { tokenBucket, shield, detectBot, slidingWindow } from "@arcjet/node";

import "dotenv/config";

// init arcjet
export const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
   
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",

      allow: [
        "CATEGORY:SEARCH_ENGINE",
      ],
    }),
    
    // rate limiting
    tokenBucket({
      mode: "LIVE",
      refillRate: 30,
      interval: 5,
      capacity: 20,
    }),
  ],
});
