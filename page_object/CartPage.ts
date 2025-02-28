import { expect } from '@playwright/test';

export class CartPage {
  constructor(private page) {}

  async gotoCart() {
    await this.page.locator('#nav-cart').click();
    await expect(this.page).toHaveURL(/cart/);
  }

  async verifyProductInCart(expectedCount: number) {
    await expect(this.page.locator('.sc-list-item')).toHaveCount(expectedCount);
  }
}