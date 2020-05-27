import boot from "./boot";

describe("smoke tests", () => {
  let page;
  let browser;
  let baseURL;

  beforeAll(async () => {
    const context = await boot({ devtools: true, headless: false, slowMo: 25 });

    page = context.page;
    browser = context.browser;
    baseURL = context.baseURL;
  });

  it("blog home page content check", async () => {
    const title = await page.evaluate(() => document.title);
    expect(title).toEqual(
      "goodguydaniel.com - Here is where Daniel writes about his experiences."
    );

    const tmp = await page.$$("header a");
    const headerLinks = await Promise.all(
      tmp.map(async (a) => await a.evaluate((e) => e.href))
    );
    expect(headerLinks).toEqual([
      `${baseURL}`,
      `${baseURL}blog`,
      `${baseURL}aboutme`,
      "https://twitter.com/_danielcaldas",
      "https://www.github.com/danielcaldas/",
      "https://www.linkedin.com/in/daniel-caldas/",
      "mailto:caldasjdaniel@gmail.com",
    ]);

    const latesth2 = await (await page.$("h2")).evaluate((e) => e.innerText);
    const projectsh4 = await (await page.$("h4")).evaluate((e) => e.innerText);

    expect(latesth2).toEqual("Latest Posts");
    expect(projectsh4).toEqual("Projects");

    const projects = [
      [
        "react-d3-graph | ",
        "https://www.github.com/danielcaldas/react-d3-graph",
      ],
      [
        "babel-plugin-cloudinary | ",
        "https://github.com/trivago/babel-plugin-cloudinary",
      ],
      ["tweak · browser extension", "https://tweak-extension.com"],
    ];

    for (let i = 0; i < 3; i++) {
      const a = await page.$(`#prj-${i}`);
      const text = await a.evaluate((e) => e.innerText);
      const href = await a.evaluate((e) => e.href);

      expect(text).toEqual(projects[i][0]);
      expect(href).toEqual(projects[i][1]);
    }
  });

  afterAll(async () => {
    await browser.close();
  });
});
