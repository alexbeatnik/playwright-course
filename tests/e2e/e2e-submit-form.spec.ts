import { test, expect } from '@playwright/test';

test.describe('Feedback form', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://zero.webappsecurity.com/');
        await page.click('#feedback');
    });

    test('Reset feedback form', async ({page}) => {
        await page.type('#name', 'your name');
        await page.type('#email', 'example@email.com');
        await page.type('#subject', 'your subject');
        await page.type('#comment', 'your comment');
        await page.click('input[name="clear"]');
        const nameInput = await page.locator('#name');
        const commentInput = await page.locator('#comment');
        await expect(nameInput).toBeEmpty();
        await expect(commentInput).toBeEmpty();
    });

    test('Submit feedback form', async ({page}) => {
        await page.type('#name', 'your name');
        await page.type('#email', 'example@email.com');
        await page.type('#subject', 'your subject');
        await page.type('#comment', 'your comment');
        await page.click('input[type="submit"]');
        await page.waitForSelector('#feedback-title');
    });
});
