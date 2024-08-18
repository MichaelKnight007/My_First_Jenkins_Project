import { test, expect } from '@playwright/test';

import path from 'path';

test.describe('File upload and download', async() => {


    test.beforeEach(async({page}) => {

        // 1. Navigate to a https://example.com URL before each test case
        await page.goto('https://practice.cydeo.com/');
        await page.waitForTimeout(2000);
    });




    // ------------------ Upload a file -------------------
  test('Test Case 1: Uploading a File', async ({ page }) => {

    // 2. Locate the webElement upload
    const uploadButton=page.locator("text='File Upload'");

    // 3. Click the upload button
    await uploadButton.click();

    expect(page.url()).toBe("https://practice.cydeo.com/upload");

    // 4. file path;
        //const filePath=path.join(__dirname, 'folderName', 'fileName');
        const filePath=path.join(__dirname, 'upload', 'upload-test.txt');

    // 5. Locate the Choose File button
    const chooseFileBtn=page.locator("//input[@id='file-upload']");

    await page.waitForTimeout(2000);

    // 6. Click the Choose File button and select the file
    await chooseFileBtn.setInputFiles(filePath);
    await page.waitForTimeout(2000);

    // Another way is; (we don't need to create a variable for the choose file button, we directly pass the locator as a parameter here)
   // page.setInputFiles("//input[@id='file-upload']",filePath);

   // 7. After choosing the file, we need to locate Upload button 
   const submitButton = page.locator("//input[@id='file-submit']");

   // 8. Clicking Upload button to upload the file
   await submitButton.click();
   await page.waitForTimeout(3000);

   // 9. Assert if the file is uploaded or not
    const uploadedMessage=page.locator("text='File Uploaded!'");
    await expect(uploadedMessage).toHaveText("File Uploaded!");

   
  });



// ------------------ Download a file to Downloads Folder -------------------
  test('Test Case 2: Downloading a File to Downloads', async ({ page }) => {

    // 2. Locate Download Files option
    const downloadFilesOption=page.locator("text='File Download'");

    // 3. Click Download Files option
    await downloadFilesOption.click();

    // 4. Assert that you landed on the correct page
    expect(page.url()).toBe("https://practice.cydeo.com/download");

    // 5. Locate the file that we want to download

      // Setting up listeners or download event and assign it to a const variable; we can create listeners before the action.
     const downloadPromise= page.waitForEvent("download"); // promise is created and it's in pending state now.

    const downloadFileLink=page.locator("text='Sesson3.txt'");
    await page.waitForTimeout(2000);

    // 6. Click on the download link
    await downloadFileLink.click();
    await page.waitForTimeout(2000);

    // 7. After clicking we accept that our pending promis is fullfilled. We assign it to another variable
    const download=await downloadPromise; // Here, await keyword is used to wait until we get the info of if the promis is fullfilled or rejected. We need to create it after clicking downloadFileLink. We'll get either error or success.

    // 8. Assert if the file is downloaded or not by checking suggested file name (It's the name shown in a small window next to Downloads option in the tool bar just after the download is completed)
    expect(download.suggestedFilename()).toBe('Sesson3.txt');
    
  });



  // ------------------ Download a file to Downloads -------------------
  test('Test Case 2: Downloading a File to a specific folder', async ({page})=>{
    // We'll copy the file to a specific folder after downloading, so we need to do same steps again to download.
    
     // 2. Locate Download Files option
     const downloadFilesOption=page.locator("text='File Download'");

     // 3. Click Download Files option
     await downloadFilesOption.click();
 
     // 4. Assert that you landed on the correct page
     expect(page.url()).toBe("https://practice.cydeo.com/download");
 
     // 5. Locate the file that we want to download
 
       // Setting up listeners or download event and assign it to a const variable; we can create listeners before the action.
      const downloadPromise= page.waitForEvent("download"); // promise is created and it's in pending state now.
 
     const downloadFileLink=page.locator("text='Sesson3.txt'");
     await page.waitForTimeout(2000);
 
     // 6. Click on the download link
     await downloadFileLink.click();
     await page.waitForTimeout(2000);
 
     // 7. After clicking we accept that our pending promis is fullfilled. We assign it to another variable
     
     const download=await downloadPromise; // Here, await keyword is used to wait until we get the info of if the promis is fullfilled or rejected. We need to create it after clicking downloadFileLink. We'll get either error or success.
 
     // 8. Assert if the file is downloaded or not by checking suggested file name (It's the name shown in a small window next to Downloads option in the tool bar just after the download is completed)
     expect(download.suggestedFilename()).toBe('Sesson3.txt');

     //Then we need to show the path of the specific folder by using import path.

     // 9. Save the file_If we don't save it, it'll never be kept in our computer. Up to here we downloaded, but after that we need to save it to keep in our computer.

     const downloadFolderPath= path.join(__dirname, 'download', download.suggestedFilename()); // We get the path of download folder through path.join. Then we pass 3 arguments, 1 is _dirname, the other is the folderName.
     // 3rd is the name that we want to give it. If we want to use the same name, then we need to pass download.suggestedFilename. download comes from the result that we assigned downloadPromise. If  we dont use download.suggestedFilename, then the name will change.

     // 10. Then we to pass this path through download that we assigned as promise.
       await download.saveAs(downloadFolderPath);





  });
});