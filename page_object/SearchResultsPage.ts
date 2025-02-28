import { Page, expect } from '@playwright/test';
export class SearchResultsPage {
  private page: Page;
  private firstProduct;

  constructor(page: Page) {
    this.page = page;
    this.firstProduct = page.getByRole('link', { 
      name: 'Logitech M185 Souris Sans Fil, 2.4 GHz avec Mini Récepteur USB, Longévité de la Pile 12 Mois, Résolution du Capteur 1000 PPP, Ambidextre, Compatible PC, Mac, Ordinateur Portable - Gris/Noir', 
      exact: true
    });
  }

  async selectFirstProduct(): Promise<void> {
    await this.firstProduct.click();
  }
}