
import { test } from '@playwright/test';
import dotenv from "dotenv"

dotenv.config("./.env");

test('Check and Uncheck Method Test: Used for radio buttons and checkBoxes', async ({ page }) => {
  // 1. Navigate to "https://practice.cydeo.com/checkboxes"
await page.goto('https://practice.cydeo.com/checkboxes');

// 2. Locate checkBox_1
const checkBox_1= page.locator("//input[@id='box1']");

 // pause for 2 seconds
 //await page.waitForTimeout(2000);

// 3. Check the box
 await checkBox_1.check();

 // pause for 2 seconds
 //await page.waitForTimeout(2000);

// 4. Locate checkBox_2

const checkBox_2=  page.locator("//input[@id='box2']");

// 5. Uncheck the box
checkBox_2.uncheck();

/* We can use either check() or uncheck() to uncheck an element. If the element is not checked and we use check(), it'll not check if the box is checked or not, it'll check it, but if we use uncheck(), it's going to check if the element is checked or not. If it's checked, then it'll uncheck it, but if it is not checked, it'll not check it.*/

 // pause for 2 seconds
 //await page.waitForTimeout(2000);

});