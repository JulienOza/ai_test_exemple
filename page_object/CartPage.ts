import { Page, expect } from '@playwright/test';
export class CartPage {
  private page: Page;
  private cartIcon;
  private cartItems;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('#nav-cart');
    this.cartItems = page.locator('.sc-list-item');
  }

  async goToCart(): Promise<void> {
    await this.cartIcon.click();
    await expect(this.page).toHaveURL(/cart/);
  }

  async verifyProductInCart(): Promise<void> {
    await expect(this.cartItems).toHaveCount(1);
  }
}