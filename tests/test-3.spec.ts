import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('Asiel article');
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).click();
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('automation');
  await page.getByRole('textbox', { name: 'Write your article (in' }).click();
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('please see');
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('tag entered');
  await page.getByRole('textbox', { name: 'Enter tags' }).press('Enter');
  await page.getByRole('button', { name: 'Publish Article' }).click();
 await expect(page.getByRole('heading')).toHaveText('Asiel article');
 await expect(page.locator('.tag-list li')).toHaveText('tag entered');
 await page.getByRole('button', { name: 'Delete Article' }).nth(1).click();
  
});