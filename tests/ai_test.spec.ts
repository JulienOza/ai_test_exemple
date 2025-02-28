import { test, expect } from '@playwright/test';

// URL Amazon France
const BASE_URL = 'https://www.amazon.fr';

// Nom du produit à rechercher
const SEARCH_TERM = 'baskets';

// Test principal
test('Commander des baskets sur Amazon', async ({ page }) => {

  // 1. Aller sur la page d'accueil d'Amazon
  await page.goto(BASE_URL);
  await expect(page).toHaveTitle(/Amazon.fr/);

  // 2. Accepter les cookies (si la popup est présente)
  const acceptCookies = page.locator('#sp-cc-accept');
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }

  // 3. Rechercher des baskets dans la barre de recherche
  await page.fill('#twotabsearchtextbox', SEARCH_TERM);
  await page.keyboard.press('Enter');
//   await page.waitForLoadState('networkidle');

  // 4. Sélectionner le premier produit de la liste
  const firstProduct = page.getByRole('link', { name: 'Publicité sponsorisée - Homme Hoops 3.0 Low Classic Vintage Shoes Chaussures' });
  await firstProduct.click();
//   await page.waitForLoadState('networkidle');

  // 5. Ajouter l'article au panier
  const addToCartButton = page.locator('#add-to-cart-button');
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();
  await page.waitForSelector('#sw-atc-confirmation');

  // 6. Aller au panier
  await page.locator('#nav-cart').click();
  await expect(page).toHaveURL(/cart/);
  await expect(page.locator('.sc-list-item')).toHaveCount(1);

  console.log('Test réussi : Produit ajouté au panier');
});