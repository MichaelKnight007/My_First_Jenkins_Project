

import { test } from '@playwright/test';

test('Using selectOptin to handle select dropdowns', async ({ page }) => {
  
    // 1. Go to "https://practice.cydeo.com/dropdown"
    await page.goto("https://practice.cydeo.com/dropdown");

    // 2. Locate simple dropdown menu by its id
    const simpleDropdown= await page.locator("//select[@id='dropdown']");

     // pause for 3 seconds
   await page.waitForTimeout(3000);

    // 3. Select option by values
   await simpleDropdown.selectOption("1");

   // pause for 3 seconds
   await page.waitForTimeout(3000); 

   // 4. Select option by index
   await simpleDropdown.selectOption({index:2});
   
    // pause for 3 seconds
    await page.waitForTimeout(3000); 

    // Select by text
   await simpleDropdown.selectOption({label: 'Option 1'});

    // pause for 3 seconds
    await page.waitForTimeout(3000); 

    // Get all options from the dropdown
  const options = await simpleDropdown.evaluate((select) => {
       return Array.from(select.options).map(option => ({
      value: option.value,
      text: option.text
    }));
  });
  
  // Log or assert the options
  console.log('Dropdown options:', options);

});