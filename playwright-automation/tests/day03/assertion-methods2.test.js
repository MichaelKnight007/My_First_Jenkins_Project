
import { test, expect } from "@playwright/test";

test.describe("Assertion Methods Part 2", async() => {

  let ulWebElement;
  let ulElements; // we created webElements and count variables at class level so that we can use it in all tests.
  let countOfWebElements;


    test.beforeEach(async ({page}) => {

      // 0. Go to https://practice.cydeo.com/
      await  page.goto("https://practice.cydeo.com/");

      //1. Locate the ul webElement
   // ulWebElement = page.locator("//div[@id='content']/ul");
   // Did not work, it located only one element

    // or;
     ulElements = page.locator("//ul[@class='list-group']/li");
     //  We located the webElement in beforeEach method so that we don't have to relocate it in each test   

     // 2. Get its number of children
    countOfWebElements = await ulElements.count();
  
  });


    //----------------------------------------------------------------
  test('Verify that there are 50 elements under ul tag', async ({ page }) => {
      
    // 3. Assert the count of children is 50 
    expect(countOfWebElements).toBe(50);

    
  });



   //----------------------------------------------------------------
  test('Verify all 50 elements under ul tag are visible', async ({ page }) => {

    //Create a for loop that has 50 iterations
    
    for(let i=0; i<countOfWebElements; i++){

      const eachElement=await ulElements.nth(i);
      
      // 2. Get the visibility of each element
      
      const visibilityOfEachElement = await eachElement.isVisible();
      
      // 3. Assert the visibility of each element is true
      
      expect(visibilityOfEachElement).toBeTruthy(); 
      // or
      await expect(eachElement).toBeVisible();

      // 4. Display the text of eachElement
    console.log( `Text of each element ${await eachElement.innerText( )}`);

    }
  });



   //----------------------------------------------------------------
  test('Verify all 50 elements under ul tag are enabled', async ({ page }) => {

    //Create a for loop that has 50 iterations
    
    for(let i=0; i<countOfWebElements; i++){
      
      const eachElement=await ulElements.nth(i);
      
      // 2. Get the enabled status of each element
      
      const enabledStatusOfEachElement = await eachElement.isEnabled();
      
      // 3. Assert the enabled status of each element is true
      
      expect(enabledStatusOfEachElement).toBeTruthy();
      
      // 4. Display the text of each element
   // console.log( `Text of each element ${await page.innerText( eachElement)}`);

    };

    
  });



   //----------------------------------------------------------------
  test('Verify all 50 elements under ul tag have href attribute', async ({ page }) => {
    
    //Create a for loop that has 50 iterations
    
    for(let i=0; i<countOfWebElements; i++){
      
      const eachElement=await ulElements.nth(i);
      
      // 2. Get the href attribute of each element
      
     /* const hrefAttributeOfEachElement = await eachElement.getAttribute("href");
      
      // 3. Assert the href attribute is not null or undefined
      
      expect(hrefAttributeOfEachElement).toHaveAttribute("href");
      
      // 4. Display the href of each element
     console.log( `Href of each element ${hrefAttributeOfEachElement}`);
      */

     console.log(await eachElement.getAttribute("href"));
    };
    
    
    
  });
});