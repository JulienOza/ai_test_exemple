import { expect } from '@playwright/test';

export class AmazonHomePage {
  constructor(private page) {}

  async goto(url: string) {
    await this.page.goto(url);
    await expect(this.page).toHaveTitle(/Amazon.fr/);
  }

  async acceptCookies() {
    const acceptCookies = this.page.locator('#sp-cc-accept');
      await acceptCookies.click();
  }

  async searchProduct(product: string) {
    await this.page.fill('#twotabsearchtextbox', product);
    await this.page.keyboard.press('Enter');
  }

  async selectFirstProduct(productName: string) {
    const firstProduct = this.page.getByRole(productName)
    await firstProduct.click();
  }
}