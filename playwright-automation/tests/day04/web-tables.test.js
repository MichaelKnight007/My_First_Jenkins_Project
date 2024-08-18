

import { test, expect } from '@playwright/test';

test.describe('Web Tables', () => {

        let webTable, rows, columns, headers; // We define the variables here to use them in all test cases. Then we initialize them in beforeEach after we navigate to the page to assign their values. So that we don't need to locate them for each test case again and again. These are called global variables.
        // We initialize these variables as let so that we can assign the values later. but if we declare then as const, we have to assign them just after the decleration. 

    test.beforeEach(async ({page})=>{

        await page.goto("https://practice.cydeo.com/web-tables");


        // 1. Locate the webtable
   webTable=page.locator("//table[@id='ctl00_MainContent_orderGrid']");

   // 2. Get the rows; we can call the rows through the webTable that we located above. But we don't need to pass all the xpath when we call it through webTable webElement, because webTable Web element already has it. We just pass the xpath of rows like "//tr" 
    rows= webTable.locator("//tr"); //We can all the rows through webTable element.

   // 3. To get the headers, we can call them trough webTable element too.
    headers= webTable.locator("//th");

   // 4. To get the all the columns
    columns= webTable.locator("//td");

    });


    test.afterEach(async({page})=>{
        await page.waitForTimeout(2000);
    });

    

    // -------------------- Test Case 1 --------------------
  test('Test Case 1: Verify rows and columns in the web table', async ({ page }) => {

     // 5. Assert that we have 9 rows;
   await expect(rows).toHaveCount(9);
     expect(await rows.count()).toEqual(9);

    // 6. Assert that we have 104 columns;
    await expect(columns).toHaveCount(104);
    expect(await columns.count()).toEqual(104);

    // 7. Assert that we have 13 columns;
    await expect(headers).toHaveCount(13);
    expect(await headers.count()).toEqual(13);
    
  });



  // -------------------- Test Case 2 --------------------
  test('Test Case 2: Read all data from the web table', async ({ page }) => {

    // 1. We get the data of each rows starting from the second column and not including the last column
    for (let i = 1;  i < await rows.count();i++) {

     // 2. We get the data of each column in the row i

     const eachRow=rows.nth(i);
     const eachColumnData=await eachRow.locator("//td");
        
     for(let j=0; j<await eachColumnData.count()-1; j++){

         // 3. We get the text of each cell in the column j and print it out.
         console.log(await eachColumnData.nth(j).innerText());

     }

     console.log("----------------------------------------------------------------");
    }
    



  });




  // -------------------- Test Case 3 --------------------
  test('Test Case 3: AI ==> Read all data from the web table', async ({ page }) => {

    // create loops to iterate over each row and each column, start the row loop from index 1 using i, and j is for column indexes and start from 0.
    for (let i = 1;  i < await rows.count();i++) {
     const eachRow=rows.nth(i);
     const eachColumnData=await eachRow.locator("//td");
        
     for(let j=0; j<await eachColumnData.count()-1; j++){
         console.log(await eachColumnData.nth(j).innerText());
     }
     console.log("----------------------------------------------------------------");
    }
    
  });



   // -------------------- Test Case 4 --------------------
   test('Test Case 4: AI ==> Check if all the check boxes can be checked', async ({ page }) => {

    // 1. Locate all the check boxes
    const checkBoxes=webTable.locator("//input[@type='checkbox']");

    // 2. Verify that there are 8 check boxes
    await expect(checkBoxes).toHaveCount(8);
    expect(await checkBoxes.count()).toEqual(8);

    // 3. Create a for of loop to check all check boxes

  // create a for of loop
  for(const eachCheckbox of await checkBoxes.all()){

        // wait for 2 seconds
       await page.waitForTimeout(1000);

        // 4. Check if any check box is unchecked before we check them
        expect (await eachCheckbox.isChecked()).toBeFalsy();

        // 5. Check each checkbox
        await eachCheckbox.check();

        expect (await eachCheckbox.isChecked()).toBeTruthy();
       // await page.waitForTimeout(1000);
    }


    // Another solution with a for loop
   /* for(let i=0; i<await checkBoxes.count(); i++){
        // 4. Check each checkbox
        await checkBoxes.nth(i).check();
    }
        */

});

});