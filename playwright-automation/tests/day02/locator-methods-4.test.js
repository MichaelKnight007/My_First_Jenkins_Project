import { test } from '@playwright/test';

test('state methods of locator', async ({ page }) => {
  
// 1. go to https://practice.cydeo.com/
await page.goto("https://practice.cydeo.com/");

// 2. locate "Autocomplete" option
const autocomplete= await page.locator("text='Autocomplete'");

// 3. Check if autocomplete option is clickable
let isAutocompleteEnabled= await autocomplete.isEnabled();

// 4. print status of autocomplete
console.log(`Autocomplete is enabled: ${isAutocompleteEnabled}`);

// 5. Check if autocomplete is visible
const isVisibile= await autocomplete.isVisible();

// 6. print status of autocomplete
console.log(`Autocomplete is visible: ${isVisibile}`);

// 7. Check if autocomplete is disabled or not
const isDisabled=await autocomplete.isDisabled();

// 8. print status of autocomplete
console.log(`Autocomplete is disabled: ${isDisabled}`);

});


test('checkBox method is checked or not', async ({ page }) => {
    
 // 1. Go to https://practice.cydeo.com/
 await page.goto("https://practice.cydeo.com");

// 2. locate "checkBoxes" option
const checkBoxesOption=await page.locator("text='Checkboxes'");

// 3. Click on CheckBoxes option
checkBoxesOption.click();

// 4. Locate checkBox_1 option
const box_1=await page.locator("//input[@id='box1']");

// 5. Check if checkBox_1 option is checked
const isBox_1Checked=await box_1.isChecked();

// 6. print status of checkBox_1
console.log(`Box 1 is checked: ${isBox_1Checked}`);

// 7. Locate checkBox_2 option
const box_2=await page.locator("//input[@id='box2']");

// 8. Check if checkBox_2 option is checked
const isBox_2Checked=await box_2.isChecked();

// 9. print status of checkBox_2
console.log(`Box 2 is checked: ${isBox_2Checked}`);

  });