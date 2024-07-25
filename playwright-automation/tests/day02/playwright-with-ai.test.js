

import { test } from '@playwright/test';

test('Youtube test', async ({ page }) => {
 
    // 1. navigate to the YouTube homepage
    await page.goto('https://www.youtube.com/');

    // 2. Locate the seachBox input field
    const seachBox= await page.locator("//input[@id='search']")

    // 3. Click on the search box
   await seachBox.click();

   // 4. Enter the search term 'AI prompt engineering'
   await seachBox.fill('AI prompt Engineering');

   // 5. Wait for the search results to load
   await page.waitForTimeout(2000);

   // 6. Press enter to perform the search
   await seachBox.press('Enter');

   // 7. Wait for the search results to load
    await page.waitForTimeout(2000);

    // 8. Locate selected video
    const video=await page.locator("//a[@id='thumbnail' and contains(@href, '/watch?v=_ZvnD73m40o')]");

    // 9. Click on the selected video
    await video.click();

    // 10. Wait for video to load
    await page.waitForTimeout(10000);

});