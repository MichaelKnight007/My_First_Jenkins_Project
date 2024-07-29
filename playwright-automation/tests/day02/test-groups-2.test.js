

// test-example.spec.ts
import { test } from '@playwright/test';
import { afterEach } from 'node:test';

test.describe('Cydeo practice website tests', () => {

test.beforeEach(async ({page}) => {

    // 1. Go to https://practice.cydeo.com/
    await page.goto("https://practice.cydeo.com/")

});

test.afterEach(async ({page}) => {
        await page.waitForTimeout(2000);
});

  test('A/B Testing link is clickable', async ({page}) => {
    
    // 2. Locate A/B Testing link
    const abTestingLink=await page.locator("text='A/B Testing'");

    // 3. Is AB Clickable
    const isABClickable=await abTestingLink.isEnabled();

    // 4. Print if it's enabled
    console.log(`A/B link is: ${isABClickable}`);
   
  });

  test('Add/Remove Elements link is displayed', async ({page}) => {
    // 2. Locate Add/Remove Element
   const addRemoveElementButton= await page.locator("text='Add/Remove Elements'");

    // 3.  Is Add/Remove Element
    const isAddRemoveElementDisplayed=await addRemoveElementButton.isVisible();

    // 4. Print if it's displated
    console.log(`Add/Remove Element is: ${isAddRemoveElementDisplayed}`);
  });

  test('Autocomplete link has text of "autocomplete"', async ({page}) => {

    // 2. Locate Autocomplete link
    const autocompleteButton= await page.locator("text='Autocomplete'"); 

    // 3. Get the text of autocomplete button
    const textOfAutocompleteButton = await autocompleteButton.innerText();

    // 4. Print the text
    console.log(`Text of Autocomplete link: ${textOfAutocompleteButton}`);
    
  });
});