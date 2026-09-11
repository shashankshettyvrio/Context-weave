import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { DataCatalogPage } from '../Pages/DataCatalogPage';

// ==========================================
// Test 1: Login
// ==========================================

test.skip('Login to ContextWeave', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();


  await page.waitForTimeout(2000);

  await loginPage.login(
    'adaeze.okonjo@vriodigital.com',
    '123456'
  );

});

test('Login using API', async ({ request }) => {

  const response = await request.post(
    'http://localhost:4000/backend/auth/login',
    {
      data: {
        email: 'adaeze.okonjo@vriodigital.com',
        password: '123456'
      }
    }
  );

  console.log('Status:', response.status());
  console.log('Response:', await response.text());

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);
});

test('Settings, Ask and Sources APIs should return success', async ({ request }) => {

  // Settings API
  const settingsResponse = await request.get(
    'http://localhost:4000/backend/settings'
  );

  expect(settingsResponse.status()).toBe(200);

  const settingsBody = await settingsResponse.json();
  console.log('Settings API Response:', settingsBody);


  // Ask API
  const askResponse = await request.get(
    'http://localhost:4000/backend/ask'
  );

  expect(askResponse.status()).toBe(200);

  const askBody = await askResponse.json();
  console.log('Ask API Response:', askBody);


  // Sources API
  const sourcesResponse = await request.get(
    'http://localhost:4000/backend/sources'
  );

  expect(sourcesResponse.status()).toBe(200);

  const sourcesBody = await sourcesResponse.json();
  console.log('Sources API Response:', sourcesBody);
});


