
import { test, expect } from '@playwright/test';

test.describe('Alerts practices', () => {


    test.beforeEach(async({page}) => {

        // Navigate to a https://practice.cydeo.com/javascript_alerts URL before each test case
        await page.goto('https://practice.cydeo.com/javascript_alerts');
    });

  test('Handling JS Information Alerts', async ({ page }) => {
    let alertMessage;

    page.on('dialog', async(dialog)=> {

        console.log(`Dialog message: ${dialog.message()}`);

        alertMessage=dialog.message();

        // 4. HAndle the alert
        // We call on() method through page, and it takes 2 arguments, 1 is String, and 2 is function. We use the function to handle the alert. We can give same name to both arguments, or we can change any of them.

        dialog.accept();

         // wait for 3 seconds
      await page.waitForTimeout(3000);


    });

        // 1. Locate the webElement that we want to click on.

        const jsAlertBtn= page.locator("text='Click for JS Alert'");

        // 2. Click on the webElement
       await jsAlertBtn.click();

       // wait for 3 seconds
      await page.waitForTimeout(3000);


        // 5. Assert that "You successfully clicked an alert" message appears
      const message=  page.locator("text='You successfully clicked an alert'");
     await expect(message).toBeVisible();
     // OR;
      expect(alertMessage).toBe("I am a JS Alert");
  });
    


  test('Handling JS Confirmation Alerts', async ({ page }) => {

let cofirmMessage; //This is a message of alert that appears on the message when we click the confirm button.

  // 1. Handling JS Confirmation Alert by clicking cancel button
    page.on('dialog', async(dialog)=> {

      console.log(`Dialog message: ${dialog.message()}`); // We can get the dialog message from the dialog

      await page.waitForTimeout(3000);

      dialog.dismiss();

    });


    // 2. We should click Click for JS Confirm button to see the alerts, so we located it and then clicked 
    const jsConfirmBtn= page.locator("text='Click for JS Confirm'");

    await jsConfirmBtn.click();

    // 3. After we click, we need to assert that message is correct, so we need to locate the message and get actual message.

    const confirmationMessage=  page.locator("#result");
   const textOfConfirmationMessage= await confirmationMessage.innerText();

   // 4. Assert now

   await page.waitForTimeout(3000);

   expect ( textOfConfirmationMessage).toBe("You clicked: Cancel");

    
  });

  test('Handling JS Prompt Alerts', async ({ page }) => {

    let promptMessage; //This is a message of alert that appears on the message when we click the prompt button.
    // 1. Handling JS Prompt Alert by entering text in the prompt input and clicking OK button
    page.on('dialog', async(dialog)=> {

      promptMessage=dialog.message();// to get the prompt message when we click Click for JS Prompt button

      console.log(`Dialog message: ${promptMessage}`); // We can get the dialog message from the dialog

        dialog.accept('CYDEO'); // to accept the prompt with the text 'Hello, from Playwright'
        await page.waitForTimeout(3000);
      });


      // 2. Locate the Click for JS Propmt button
      const jsPromptBtn=page.locator("text='Click for JS Prompt'");

      // 3. Click on the webElement
       await jsPromptBtn.click();

       // 4. Assert that we get the expected result as "You entered: CYDEO"

       // So first we need to locate the result message
       const resultMessage=  page.locator("#result");
       const textOfResultMessage= await resultMessage.innerText();

       // assert
       await page.waitForTimeout(3000);
       expect(textOfResultMessage).toBe("You entered: CYDEO");


    });
    
  });
