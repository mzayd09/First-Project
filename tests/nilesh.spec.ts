import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect assdsd title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('check the title of the page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect the title of the page to be "Playwright: Fast and reliable end-to-end testing for modern web apps"
  await expect(page).toHaveTitle('Playwright: Fast and reliable end-to-end testing for modern web apps');
});
test('check the URL of the page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect the URL of the page to be "https://playwright.dev/"
  await expect(page).toHaveURL('https://playwright.dev/');
});
test('check the visibility of the logo', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect the logo to be visible
  await expect(page.getByRole('img', { name: 'Playwright logo' })).toBeVisible();
});