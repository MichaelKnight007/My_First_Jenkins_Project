
import { test } from '@playwright/test';

test('Search for Cydeo on google', async ({ page }) => {
  //goto google homepage
  await page.goto('https://www.google.com');

  //pause for 3 seconds
  await page.waitForTimeout(2000);

  //type Cydeo in search bar
  const searchBox=await page.locator("//textarea[@name='q']")
  
  // use fill to pass Cydeo to the seachBox
  await searchBox.fill('Cydeo');
  
  await page.waitForTimeout(2000);

  //press enter to search
  await searchBox.press('Enter');
});