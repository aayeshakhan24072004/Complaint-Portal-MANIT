
import http from "http";
import https from "https";
import cron from "cron";

const job = new cron.CronJob("*/5 * * * *", function () {
  const url = process.env.SITE;
  if (!url) {
    console.error("Error: SITE environment variable is not defined");
    return;
  }

  const client = url.startsWith("https") ? https : http;

  client
    .get(url, (res) => {
      if (res.statusCode === 200) {
        console.log("Successfully hit backend endpoint. Server is active.");
      } else {
        console.error(`Failed to hit endpoint. Status code: ${res.statusCode}`);
      }
    })
    .on("error", (err) => {
      console.error("Error during request:", err.message);
    });
});

job.start();

export default job;
