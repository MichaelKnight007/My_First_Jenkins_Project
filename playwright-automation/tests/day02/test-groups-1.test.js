// test-example.spec.ts
import { test } from '@playwright/test';

test.describe('Test Group', () => {

    test.beforeAll(async () => {
console.log('BeforeAll is executed');
    });

    test.beforeEach(async () => {
        console.log('BeforeEach is executed');
    });

    test.afterEach(async () => {
        console.log('AfterEach is executed');
    });

    test.afterAll(async () => {
        console.log('AfterAll is executed');
    });

  test('Test 1', async () => {
    console.log('Test 1 is executed successfully');
  });


  test('Test 2', async () => {
    console.log('Test 2 is executed successfully');
  });


  test('Test 3', async () => {
    console.log('Test 2 is executed successfully');
  });

});