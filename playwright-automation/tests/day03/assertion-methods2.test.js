
import { test, expect } from '@playwright/test';

test.describe('Assertion Methods Part 2', async() => {

  let ulWebElement;
  let ulLocator; // we created webElements variable at class level so that we can use it in all tests.

    page.beforeEach(async({page}) => {
      await  page.goto("https://practice.cydeo.com/");

      //1. Locate the ul webElement

    ulWebElement = page.locator("//div[@id='content']/ul");

    // or;
     ulLocator = page.locator("//ul[@class='list-group']/li");
     //  We located the webElement in beforeEach method so that we don't have to relocate it in each test   });

    //----------------------------------------------------------------
  test('Verify that there are 50 elements under ul tag', async ({ page }) => {

    
    // 2. Get its number of children
    
    const childrenCount = await ulWebElement.count();
    
    // 3. Assert the count of children is 50
    
    expect(childrenCount).toBe(50);

    
  });



   //----------------------------------------------------------------
  test('Verify all 50 elements under ul tag are visible', async ({ page }) => {
    
  });



   //----------------------------------------------------------------
  test('Verify all 50 elements under ul tag are enabled', async ({ page }) => {
    
  });



   //----------------------------------------------------------------
  test('Verify all 50 elements under ul tag have href attribute', async ({ page }) => {
    // Test logic goes here
  });
});