import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { loginPage } from "../globalPagesSetup";
import { BrowserUtility } from '../utilities/BrowserUtility';

// WRITE YOUR STEP DEFINITIONS HERE...

Given('user is already on the login page', async function () {
  await loginPage.page.goto(loginPage.librarayUrl);
});

When('user enters valid username {string}', async function (userType: string) {
 await loginPage.enterUsername();
});

When('user enters valid password {string}', async function (userType: string) {
  await loginPage.enterPassword();
});

When('user clicks the login button', async function () {
  await loginPage.clickLoginButton();
});

Then('user login succussfully to the homepage', async function () {
  // verify the title is Library
  await expect(loginPage.page).toHaveTitle('Library');
});