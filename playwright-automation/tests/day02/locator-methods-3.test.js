

import { test } from '@playwright/test';

test('InnerText method test', async ({ page }) => {

    // 1. Go to "https://practice.cydeo.com/"
    await page.goto("https://practice.cydeo.com/");

    // wait for 2 seconds
   await page.waitForTimeout(2000);

    // 2. Locate "AB Testing link"
   const linkOfABTesting = await page.locator("text='A/B Testing'");
  /* const linkOfABTesting = await page.getByText("text='A/B Testing'");
    Using getByText("text='A/B Testing'"); is also work. If we are looking for a specific text, we use it.
  */

   // 3. Click the "AB Testing" button
   linkOfABTesting.click();

    // wait for 2 seconds
    await page.waitForTimeout(3000);

    // 4. Locate the text of webelement
    const paragraph= await page.locator("//div[@class='example']/p");
    
    // 5. Get the text of it
    const actualTextOfParagraph = await paragraph.innerText();


    // Print
    console.log(actualTextOfParagraph);

});


test('inputValue method test: only works with <input>, <textarea>, <select> tags', async ({ page }) => {
   
    // 1. Navigate to https://practice.cydeo.com/input
    await page.goto("https://practice.cydeo.com/inputs");

    // 2. Locate searchBox
    const searchBox= await page.locator("//input[@type='number']");

    // 3. Write 1200 into the searchBox
   await searchBox.fill('1200');

   // wait for 2 seconds
   await page.waitForTimeout(2000);

   // 4. Get the text from the searchBox
  const inputValue= await searchBox.inputValue();
   
   // Print it in the console
   console.log(inputValue);

  });


  test('getAttribute method: used for getting the value of an attribute', async ({ page }) => {
    
 // 1. Goto https://practice.cydeo.com/inputs
 await page.goto("https://practice.cydeo.com/inputs");

 // 2. Locate "Cydeo" link
const cydeoLink=await page.locator("text='CYDEO'")

 // 3. Get the URL of the href attribute
let cydeoLinkURL= await cydeoLink.getAttribute("href");

// 4. print the URL of the href attribute
console.log(cydeoLinkURL);

//OR;
console.log(`Your URL is: ${cydeoLinkURL}`);

  });