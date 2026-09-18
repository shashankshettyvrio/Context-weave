import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { DataCatalogPage } from '../Pages/DataCatalogPage';

// ==========================================
// Test 1: Login
// ==========================================

test('Login to ContextWeave', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();


  await page.waitForTimeout(2000);

  await loginPage.login(
    'adaeze.okonjo@vriodigital.com',
    '123456'
  );

  // Validate successful login
  await expect(
    page.getByRole('menuitem', { name: 'table Data Catalog' })
  ).toBeVisible();
});


// ==========================================
// Test 2: Data Catalog - Connect BigQuery
// ==========================================

test('Connect Google BigQuery source', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dataCatalogPage = new DataCatalogPage(page)  ;

  // Login
  await loginPage.goto();

  // Wait 10 seconds for the application to load
  await page.waitForTimeout(1000);

  await loginPage.login(
    'adaeze.okonjo@vriodigital.com',
    '123456'
  );

  // Open Data Catalog
  await dataCatalogPage.openDataCatalog();

  // Open Sources
  await dataCatalogPage.openSources();

  // Connect Source
  await dataCatalogPage.connectSource();

  // Login with Google
  await dataCatalogPage.loginWithGoogle();

  // Enter Warehouse
  await dataCatalogPage.enterWarehouse('Conops');

  // Run Preview and Finish
  await dataCatalogPage.runPreviewAndFinish();
});