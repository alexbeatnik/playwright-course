import { test, expect } from '@playwright/test';

test('Example', async ({ page }) => {
    await page.goto('https://example.com/');
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toHaveText('Example Domain');
});
