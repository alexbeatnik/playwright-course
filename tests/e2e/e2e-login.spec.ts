import { test, expect } from '@playwright/test';

test.describe('Login/Logout flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/');
    });

    test('Negative scenario for login flow', async ({ page }) => {
        await page.click('#signin_button');
        await page.type('#user_login', 'some_username');
        await page.type('#user_password', 'some_password');
        await page.click('text=Sign in');
        const errorMessage = await page.locator('.alert-error');
        await expect(errorMessage).toHaveText(
            'Login and/or password are wrong.'
        );
    });

    test('Positive scenario for login flow', async ({ page }) => {
        await page.click('#signin_button');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('text=Sign in');
        await page.goto(
            'http://zero.webappsecurity.com/bank/transfer-funds.html'
        );

        const accountSummaryTab = await page.locator('#account_summary_tab');
        await expect(accountSummaryTab).toBeVisible();
        await page.goto('http://zero.webappsecurity.com/logout.html');
        await expect(page).toHaveURL(
            'http://zero.webappsecurity.com/index.html'
        );
    });
});
