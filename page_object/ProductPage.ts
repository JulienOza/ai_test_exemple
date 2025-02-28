import { expect } from '@playwright/test';

export class ProductPage {
  constructor(private page) {}

  async addToCart() {
    const addToCartButton = this.page.locator('#add-to-cart-button');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
    await this.page.waitForSelector('#sw-atc-confirmation');
  }
}