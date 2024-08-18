

// There are 2 ways to pass authentication
    // 1. Embedding the credentials into URL; we first write https:// then we pass username and password seperating them by a ":", them we add @ and then pass the entire URL.
   // It becomes; https://username:password@domain.com
   // This method is not safe to use.

    // 2. We can use base64 format to add the credentials in a more secure way.
   
    import { test, expect } from '@playwright/test';
    test.describe('Web Based Authentication', async () => {

        test.afterEach(async ({page})=>{

            await page.waitForTimeout(2000);

        });

      
      test('Embedding authentication through URL', async ({ page }) => {

        // 0. If we don't pass the credentials through the domain, applicaiton will request credentials. We will get exception. This is not recommended because it is not safe.

       //  await page.goto("https://practice.cydeo.com/basic_auth");
        
        
        // 1. Here we embedded credentials into the domain.
        
        // https://username:password@practice.cydeo.com/basic_auth
        await page.goto('https://admin:admin@practice.cydeo.com/basic_auth');
        //await expect(page.locator('h1')).toHaveText('Basic Auth');


        // 2. Assert
        await expect (page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();
    
    });
    
    test('Passing authentication through base64', async ({ page }) => {
    // 1. Encode the credentials in base64 format;
    // We call from() method from Buffer and then pass the credentials as arguments in from() method, then by using toString('base64') method, we convert the credentials into base64 format and assign it to a const. New object is our token. 

    const base64Credentials = Buffer.from('admin:admin').toString('base64');

    console.log(base64Credentials);// YWRtaW46YWRtaW4=

    // 2. When we get the token we can use it by setting up authentication header. Then we can goto the URL

    await page.setExtraHTTPHeaders({
             Authorization: `Basic ${base64Credentials}`
        });

        await page.goto("https://practice.cydeo.com/basic_auth");

          // 3. Assert
        await expect (page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible(); 

          /*
          We can handle authentication with;
        const base64Credentials = Buffer.from('admin:admin').toString('base64');
        await page.setExtraHTTPHeaders({Authorization: `Basic ${base64Credentials}`});
        await page.goto("https://practice.cydeo.com/basic_auth");
        */
    });
    
    });