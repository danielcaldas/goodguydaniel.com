import boot from "./boot";

describe("smoke tests", () => {
  let page;
  let browser;
  let baseURL;

  beforeAll(async () => {
    const context = await boot();

    page = context.page;
    browser = context.browser;
    baseURL = context.baseURL;
  });

  it("blog home page content check", async () => {
    const title = await page.evaluate(() => document.title);
    expect(title).toEqual("goodguydaniel.com - Here is where Daniel writes about his experiences.");

    let tmp = await page.$$("header a");
    const headerLinks = await Promise.all(tmp.map(async (a) => await a.evaluate((e) => e.href)));
    expect(headerLinks).toEqual([
      `${baseURL}`,
      `${baseURL}blog`,
      `${baseURL}aboutme`,
      "https://twitter.com/_danielcaldas",
      "https://www.github.com/danielcaldas/",
      "https://www.linkedin.com/in/daniel-caldas/",
      "mailto:caldasjdaniel@gmail.com",
    ]);

    tmp = await page.$$("h2");
    const headings = await Promise.all(tmp.map(async (h) => await h.evaluate((e) => e.innerText)));
    expect(headings).toEqual(["Featured Posts", "Latest Posts", "Podcasts"]);

    const projects = [
      ["react-d3-graph", "https://www.github.com/danielcaldas/react-d3-graph"],
      ["tweak browser extension", "https://tweak-extension.com/"],
    ];

    for (let i = 0; i < 2; i++) {
      const a = await page.$(`#prj-${i}`);
      const text = await a.evaluate((e) => e.innerText);
      const href = await a.evaluate((e) => e.href);

      expect(text).toEqual(expect.stringContaining(projects[i][0]));
      expect(href).toEqual(expect.stringContaining(projects[i][1]));
    }
  });

  afterAll(async () => {
    await browser.close();
  });
});
