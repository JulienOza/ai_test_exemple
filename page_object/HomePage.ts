import { Page, expect } from '@playwright/test';
export class HomePage {
  private page: Page;
  private acceptCookiesButton;
  private searchBar;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookiesButton = page.locator('#sp-cc-accept');
    this.searchBar = page.locator('#twotabsearchtextbox');
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url);
    await expect(this.page).toHaveTitle(/Amazon.fr/);
  }

  async acceptCookies(): Promise<void> {
    if (await this.acceptCookiesButton.isVisible()) {
      await this.acceptCookiesButton.click();
    }
  }

  async searchProduct(product: string): Promise<void> {
    await this.searchBar.fill(product);
    await this.page.keyboard.press('Enter');
  }
}