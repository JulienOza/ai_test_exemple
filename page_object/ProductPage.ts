import { Page, expect } from '@playwright/test';
export class ProductPage {
  private page: Page;
  private addToCartButton;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByRole('button', { name: 'Ajouter au panier', exact: true });
  }

  async addToCart(): Promise<void> {
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
  }
}