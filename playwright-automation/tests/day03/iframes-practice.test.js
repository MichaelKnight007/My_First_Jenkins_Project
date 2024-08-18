

import { test, expect } from '@playwright/test';


// Create a test.describe block for the Test Group
test.describe("Iframes Test", () => {


// Create a beforeEach hooks function that goes to "https://practice.cydeo.com/iframe"
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.cydeo.com/iframe');
  });



    //------------------------------------------------------------------
  test('Locate the iframe by id', async ({ page }) => {

  

    // 1. Locate iframe by id
    // We use page to locate the iframe.
    const myFrame= page.frameLocator("#mce_0_ifr");

    // Locate the body of the iframe
    // We call the body of the iframe through the myFrame
    // We use locator of the iframe to locate a webElement within iframe.
    const iframeBody= myFrame.locator("//body[@id='tinymce']");

    // to clear the webElement field .clear() method works for the most of the times.
   // await iframeBody.clear();

    //If it does not clear, we need to delete it by using keyboard actions
    //ctrl+A is for selecting all message, than we use backspace to delete all.
     //  pause th code for 3 seconds
     await page.waitForTimeout(3000);
    await iframeBody.press("Control+A");
    // pause th code for 3 seconds
    await page.waitForTimeout(3000);

    await iframeBody.press("Backspace");
    // pause th code for 3 seconds
    await page.waitForTimeout(3000);
   
    // 3. Write "Hello World" to the iframe field
    await iframeBody.type("Hello World");

    // 4. pause th code for 3 seconds
    await page.waitForTimeout(3000);

    // 5. Assertion
    // expect( iframeBody.innerText()).toBe("Hello World");
    await expect (iframeBody).toHaveText("Hello World");

    console.log(await iframeBody.innerText());

    
  });


 

  //------------------------------------------------------------------
  test('Locate the iframe using xpath', async ({ page }) => {

    // 1. Locate iframe by using XPATH
    // We use page to locate the iframe.
    const myFrame= page.frameLocator("//iframe[@id='mce_0_ifr']");

    // 2. Locate ifameBody that we need to use to write some notes
    const iframeBody=myFrame.locator("//body[@id='tinymce']");

    // 3. Check if the iframeBody can be used to write some notes
   await expect(iframeBody).not.toBeDisabled();
   await expect(iframeBody).not.toBeHidden();
   
  });



  //------------------------------------------------------------------
  test('Locate the iframe using css', async ({ page }) => {
    // 1. Locate iframe by using CSS
    // We use page to locate the iframe.
    const myFrame= page.frameLocator("#iframe#mce_0_ifr");

    // 2. Locate ifameBody that we need to use to write some notes
    const iframeBody=myFrame.locator("#tinymce");

    // 3. Check if the iframeBody can be used to write some notes
   await expect(iframeBody).toBeEnabled();
   await expect(iframeBody).toBeEditable();
   
  });


  });
