

import { test, expect } from '@playwright/test';

test.describe('Test Group_1', () => {
  test('Test Case 1', async ({ page }) => {
    console.log("Test 1 is completed in Test Group_1");
  });

  test('@smoke Test Case 2', async ({ page }) => {
    console.log("Test 2 is completed in Test Group_1");
  });

  test('Test Case 3', async ({ page }) => {
    console.log("Test 3 is completed in Test Group_1");
  });

});


  test.describe('Test Group_2', () => {
    test('Test Case 1', async ({ page }) => {
        console.log("Test 1 is completed in Test Group_2");
    });
  
    test('Test Case 2', async ({ page }) => {
        console.log("Test 2 is completed in Test Group_2");
    });
  
    test('Test Case 3', async ({ page }) => {
        console.log("Test 3 is completed in Test Group_2");
    });

    test('Test Case 4', async ({ page }) => {
        console.log("Test 4 is completed in Test Group_2");
      });
    
      test('@smoke Test Case 5', async ({ page }) => {
        console.log("Test 5 is completed in Test Group_2");
      });
    });