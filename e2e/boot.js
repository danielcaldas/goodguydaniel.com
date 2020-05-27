/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import puppeteer from "puppeteer";

require("dotenv").config({
  path: ".env.e2e",
});

export default async function boot(options = {}) {
  const { headless = true, devtools = false, slowMo = false } = options;
  const browser = await puppeteer.launch({
    headless,
    devtools,
    ...(slowMo && { slowMo }),
  });
  const page = await browser.newPage();
  const baseURL = process.env.TARGET_URL;

  await page.goto(baseURL, ["networkidle0", "domcontentloaded"]);

  return {
    baseURL,
    browser,
    page,
  };
}
