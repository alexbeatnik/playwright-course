import { test, expect } from '@playwright/test';

test('Example', async ({ page }) => {
    await page.goto('https://example.com/');
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toHaveText('Example Domain');
});

test('Cliking on elements', async ({ page }) => {
    await page.goto('http://zero.webappsecurity.com/index.html');
    await page.click('#signin_button');
    await page.click('text=Sign in');
    const errorMessage = await page.locator('.alert-error');
    await expect(errorMessage).toHaveText('Login and/or password are wrong.');
});
