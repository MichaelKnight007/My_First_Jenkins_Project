

import { test,expect } from '@playwright/test';



test.describe('Assertion Practice in UI testing', async() => {


   test.beforeEach(async ({page}) => {

    // 1. Go to https://practice.cydeo.com/
   await page.goto("https://practice.cydeo.com/");

   }),

    
//-------------------------------------------------------------------
  test('Verify the page title is Practice', async ({page}) => {
    const actualTitle=await page.title();
    let expectedTitle="Practice";

    expect(actualTitle).toEqual("Practice");

    // Another solution is;
   // expect(page).toHaveTitle("Practice");
    // Here we check page title when we are in that page, this is not returning String. So the first option is better because if we change the page, it will not work.

  
  });

  //----------------------------------------------------------------

  test('Verify the text "Automation" is included in header text', async ({page}) => {
   
    // 2. Locate Header Text
    const headerText= page.locator("text='Test Automation Practice'");

    // 3. Get the text of Header Text
    //const textOfHeader = await headerText.innerText();
    //or
    const textOfHeader= await headerText.textContent();

    // 4. Assert the text
    expect(textOfHeader).toContain("Automation");
   
  });

  //-------------------------------------------------------------------

  test('Verify that "A/B Testing" is clickable', async ({page}) => {
    
    // 2. Locate A/B Testing link
    const abTestingLink=await page.locator("text='A/B Testing'");

    // 3. Is AB Clickable
    const isABClickable=await abTestingLink.isEnabled();

    // 4. Assertion
    expect(isABClickable).toBeTruthy();

    // or using webElement;

    await expect(abTestingLink).toBeEnabled();
    // When we use webElement in assertions, we need to use await because the methods have promises.

    
  });


  //-------------------------------------------------------------------

  test('Verify that "Autocomplete" has the href "/autocomplete"', async ({page}) => {

    // 2. Locate Autocomplete link
    const autocompleteButton= page.locator("text='Autocomplete'");

    // 3. Get the href attribute
    const hrefAttribute= await autocompleteButton.getAttribute("href");

    // 4. Assert the href attribute
    expect(hrefAttribute).toEqual("/autocomplete");
     //or 
     expect(autocompleteButton).toHaveAttribute("href","/autocomplete");
  
  });

});