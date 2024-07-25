

import test from "playwright/test";

test("Search Playwright on google",async ({ page }) => {

    /* 
    Steps:
       1. Open browser (done automatically by Playwright, we don't need to automate this)
       2. Navigate to Google homepage
       3. locate search input field
       4. Enter 'Playwright' in search field
       5. Click on search button or hit enter key
       6. Verify that 'Playwright' is present in search results
       7. Close browser (done automatically by Playwright, we don't need to automate this)
    */

        // 1. Navigate to Google homepage
       await page.goto('https://www.google.com');

       // 2. Locate search input field
       // We use const to store the locator object to avoid re-querying the element
       const searchBox = await page.locator("//textarea[@class='gLFyf']");
       await page.waitForTimeout(2000); // Wait for 2 seconds for search results to load
       // 3. Enter 'Playwright' in search field
      // await searchBox.fill('Playwright Automation');
       await searchBox.type('Playwright Automation');

     // Both methods will perform the same action. fill() will write the text all at once and type() will write the characters one by one. 

     /* Creating pause to wait for the search results to load */
    // await page.pause(2000); // 2 seconds pause for search results to load

    await page.waitForTimeout(2000); // Wait for 2 seconds for search results to load

     // 4. Click on search button or hit enter key
     await searchBox.press('Enter'); // Press Enter key to perform search


     await page.waitForTimeout(2000); // Wait for 2 seconds for search results to load

})