import { test, expect } from "@playwright/test";

test("should open the home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("http://localhost:3000/");
  // Find an element with the text 'Providing IT solutions'
  await expect(page.locator("p.hero")).toContainText("Providing IT solutions");
});
