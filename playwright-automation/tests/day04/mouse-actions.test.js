

// import test and expect playwright/test
import {test, expect} from 'playwright/test';

// create a test group with 3 tests in it

test.describe("Mouse actions", async() => {

    test.beforeEach(async({page})=>{

        // navigate to the URL "https://practice.cydeo.com/" in the browser window
       await page.goto("https://practice.cydeo.com/");
       
        
    });

    test.afterEach(async({page})=>{

      //Pause the code after each test case for 3  sec
     await page.waitForTimeout(3000);

})

  // --------------------------------- 1st test case ---------------------------------------

  test('Left click with mouse hover test', async ({page}) => {

    // 1. Locate the webElement that we want to click. 
   // const inputButton=page.locator("//a[href='/inputs']");

    // 2. Click on the inputButton webElement with mouse action
    /* When I located the webElement and assigned it to a constant variable, it did not work and gave an exception. The type of the variable did not match. So we used the locator of the variable as an argument for click method.
    */
   await page.click("//a[@href='/inputs']");

   // 3. Assert
   expect(page.url()).toBe("https://practice.cydeo.com/inputs");

   //OR;
   expect (await page.title()).toBe("Inputs");

    
  });

  // -------------------- 2nd Test Case ----------------------------------

  test('Right click with mouse test', async ({page}) => {

    // 1. Right click with mouse 
    /*
    We add another argument and write in a curly bracket then paste the value as right
    */ 
      await page.waitForTimeout(3000);

      await page.click("//a[@href='/inputs']",{button:"right"});

      await page.waitForTimeout(3000);

      
  });

  // -------------------- 3rd Test Case ----------------------------------

  test('Double Click Test', async ({page}) => {

    // 1. Double click with mouse 
    await page.waitForTimeout(3000);
    page.dblclick("text='A/B Testing'");
    await page.waitForTimeout(3000);

    // 2. Assert
    expect(page.url()).toBe("https://practice.cydeo.com/abtest");

  });



 // -------------------- 4th Test Case ----------------------------------

  test('Double Click Test_2', async ({page}) => {

    // 0. Navigate to another page
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");

    // 1. Double click with mouse 
    await page.waitForTimeout(3000);
    page.locator("text='Add Element'").dblclick();
    await page.waitForTimeout(3000);

    // 2. Assert
   await expect(page.locator("//button[contains(text(), 'Delete')]")).toHaveCount(2);

  });



 // -------------------- 5th Test Case ----------------------------------

  test('Mouse hover over multiple elements test', async ({page}) => {
    
    

    // 1. Locate the webElement hover and then click on it.
    
    await page.click("text='Hovers'");

    // 2. Locate the pictures 
    //to hover over each of the picture one by one, we need to create a loop
        // a. locate all the pictures
        const allImages = page.locator("//img[@src='/img/avatar-blank.jpg' and @alt='User Avatar']");
        
        // b. create a for of loop and get every element 
        for (const eachImage of await allImages.all()) {
          await page.waitForTimeout(2000);
          await eachImage.hover();
         
        }
        
  });


  // -------------------- 6th Test Case ----------------------------------

  test('Mouse hover over single element test', async ({page}) => {
    
  
    // 1. Locate the webElement hover and then click on it.
    
    await page.click("text='Hovers'");

    // 2. Locate the first picture
    // const firstImage=page.locator("(//img[@src='/img/avatar-blank.jpg'])[1]");

    // 3. hover over 1st picture
      // 1st  way to hover over
      // await firstImage.hover();

     // 2nd way to hover over==> We don't need to create the locatorin this method
     await page.hover("(//img[@src='/img/avatar-blank.jpg'])[1]");
       await page.waitForTimeout(2000);

    // 4.  Assert 
      // locate the message
      const actualMessage= page.locator("text='name: user1'");
       await expect(actualMessage).toHaveText("name: user1");

        // OR;
      await  expect(actualMessage).toBeVisible();
      expect(await actualMessage.innerText()).toBe("name: user1");

  });

  // -------------------- 7th Test Case ----------------------------------

  test('Mouse drag and drop test', async ({page}) => {
    
  // 1. Locate Drag And Drop button
  const dragAndDropBtn=page.locator("text='Drag and Drop'");
  dragAndDropBtn.click();

  // 2. Locate rectangle A
  const rectA=page.locator("#column-a");

  // 3. Locate rectangle B
  const rectB=page.locator("#column-b");

  // 4. Drag rectangle A to rectangle B
  await page.waitForTimeout(2000);
 // await page.dragAndDrop(rectA, rectB); Sİnce drag and drop method does not accept webElements as raguments, we need to use the locator witout assigning them to a const value. Smilating mouse action: drag and drop.

  await page.dragAndDrop("#column-a","#column-b")
  await page.waitForTimeout(2000);

  // To drag and drop by using the webElements, we'll call the dragTo method through webElement.
  // Drag and drop is performed on web elements directly

  await rectB.dragTo(rectA);
  await page.waitForTimeout(2000);


  // Assert
   // 1. Locate the webElement for the first rectange again

   const rectA_After_drag=page.locator("#column-a");
   await expect(rectA_After_drag.innerText()).toBe("A");
  

  });

  test('Mouse wheel scrolling', async ({page}) => {

    // 1. Scroll by pixels, scroll vertically but not horizontally
    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,300);

    await page.waitForTimeout(2000);
    await page.mouse.wheel(0,-300,);
    await page.waitForTimeout(2000);

     // 2. Scroll by webElement scroll until the webElement is in view

      // Locate the webElement
      const inputLink=page.locator("text='Inputs'");
      await inputLink.scrollIntoViewIfNeeded();
      await page.waitForTimeout(2000);

    
    });

});