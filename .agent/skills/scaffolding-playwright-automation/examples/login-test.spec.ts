import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Authentication Flow', () => {
    test('User should be able to login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate();
        await loginPage.login('testuser@example.com', 'password123');

        await expect(page).toHaveURL(/.*dashboard/);
    });
});
