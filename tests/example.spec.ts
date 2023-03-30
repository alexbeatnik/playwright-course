import { test, expect } from '@playwright/test';

test.skip('Example', async ({ page }) => {
    await page.goto('https://example.com/');
    const pageTitle = await page.locator('h1');
    await expect(pageTitle).toHaveText('Example Domain');
});

test.describe('First test suite', () => {
    test('Cliking on elements', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.click('#signin_button');
        await page.click('text=Sign in');
        const errorMessage = await page.locator('.alert-error');
        await expect(errorMessage).toHaveText(
            'Login and/or password are wrong.'
        );
    });

    test('Working with inputs', async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.click('#signin_button');
        await page.type('#user_login', 'some_username');
        await page.type('#user_password', 'some_password');
        await page.click('text=Sign in');
        const errorMessage = await page.locator('.alert-error');
        await expect(errorMessage).toHaveText(
            'Login and/or password are wrong.'
        );
    });

    test('Assertions', async ({ page }) => {
        await page.goto('https://example.com/');
        await expect(page).toHaveURL('https://example.com');
        await expect(page).toHaveTitle('Example Domain');
        const element = await page.locator('h1');
        await expect(element).toBeVisible();
        await expect(element).toHaveText('Example Domain');
        await expect(element).toHaveCount(1);
        const nonExistentElement = await page.locator('h5');
        await expect(nonExistentElement).not.toBeVisible();
    });
});

test.describe.only('Hooks', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://example.com/');
        await expect(page).toHaveURL('https://example.com');
    });

    test('Screenshots', async ({ page }) => {
        await page.screenshot({ path: 'screenshot.png', fullPage: true });
    });

    test('Screenshot single element', async ({ page }) => {
        const element = await page.locator('h1');
        await element.screenshot({ path: 'singleScreenshot.png' });
    });
});
