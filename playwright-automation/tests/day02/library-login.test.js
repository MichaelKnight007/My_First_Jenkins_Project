
import { test, expect } from '@playwright/test';

test('Library Login Hard Coded', async ({ page }) => {

    // 1. Navigate to the home page "https://library2.cydeo.com/"
    await page.goto('https://library2.cydeo.com/');
    
    // 2. Locate email field
   const userNameField= await page.locator("//input[@id='inputEmail']");

    // 3. Enter email
    userNameField.fill("librarian10@library");

       // pause for 2 seconds
         await page.waitForTimeout(2000);

   // 4. Locate password field
   const passwordField= await page.locator("//input[@id='inputPassword']");

   // 5. Enter password
   passwordField.fill("libraryUser");
   
   // 6. Locate signIn button
   const signInButton= await page.locator("//button[@type='submit']");

   // pause for 2 seconds
await page.waitForTimeout(2000);

   // 7. Click the sign in button
   await signInButton.click();

     // pause for 2 seconds
await page.waitForTimeout(3000);

});

