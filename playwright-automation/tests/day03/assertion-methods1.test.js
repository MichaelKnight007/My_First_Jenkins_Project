

import { test, expect } from '@playwright/test';

test.describe('Assertions methods which are not for webElements', () => {

  test('toBe example', async() => {

    let elementValue=5;
    expect(elementValue).toBe(5); // This will pass
    
  });

  test('toBeTruthy, toBeFalsy methods example', async() => {

    let value1=true;

    expect(value1).toBeTruthy(); // This will pass

    let value2=false;

    expect(value2).toBeFalsy(); // This will pass
   
  });

  test('toContain example', async() => {

    let word1='Cydeo School';

    expect(word1).toContain('Cydeo');
  
  });

  test('toEqual example', async() => {

    let elementValue=5;
    expect(elementValue).toBe(5); // like == method of Java
    expect(elementValue).toEqual(5); // like .equals() method of Java

    //Example of JS objects in Json format

    let a={a:1, b:2};
    let b={a:1, b:2};
     // They have the same values but they have different objects. So if we use .toEqual(), we'll get true, but if we use .toBe(), weLL get false.

   //  expect(a).toBe(b); // Returns false

     expect(a).toEqual(b); // Returns true

  })
});