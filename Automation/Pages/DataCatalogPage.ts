import { Page } from '@playwright/test';

export class DataCatalogPage {
  constructor(private page: Page) {}

  async openDataCatalog() {
    await this.page
      .getByRole('menuitem', { name: 'table Data Catalog' })
      .click();

    await this.page
      .getByRole('button', {
        name: 'Google BigQuery bigquery:vrio',
      })
      .click();
  }

  async openSources() {
    await this.page
      .getByRole('menuitem', { name: 'database Sources' })
      .click();
  }

  async connectSource() {
    await this.page
      .getByRole('button', { name: 'plus Connect source' })
      .click();

    await this.page
      .getByRole('dialog', {
        name: 'Connect a source Registration',
      })
      .click();

    await this.page.getByText('Google BigQuery', { exact: true }).click();

    await this.page
      .getByRole('button', { name: 'Continue arrow-right' })
      .click();
  }

  async loginWithGoogle() {
    await this.page
      .getByRole('button', {
        name: 'google Login with Google',
      })
      .click();

    await this.page
      .getByRole('button', {
        name: 'Adaeze Okonjo adaeze.okonjo@',
      })
      .click();

    await this.page.getByRole('button', { name: 'Allow' }).click();

    await this.page
      .getByRole('button', { name: 'Continue arrow-right' })
      .click();
  }

  async enterWarehouse(warehouse: string) {
    await this.page
      .getByRole('textbox', { name: 'E-waste warehouse' })
      .fill(warehouse);

    await this.page
      .getByRole('button', { name: 'Continue arrow-right' })
      .click();
  }

  async runPreviewAndFinish() {
    await this.page.getByRole('button', { name: 'Run preview' }).click();

    await this.page.getByRole('button', { name: 'Finish' }).click();

    await this.page
      .locator('button')
      .filter({ hasText: 'Close' })
      .click();
  }
}