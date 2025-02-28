import { test, expect } from '@playwright/test';

// URL Amazon France
const BASE_URL = 'https://www.amazon.fr';

// Nom du produit à rechercher
const SEARCH_TERM = 'souris sans fil';

// Test principal
test('Commander des souris sans fil sur Amazon', async ({ page }) => {

  // 1. Aller sur la page d'accueil d'Amazon
  await page.goto(BASE_URL);
  await expect(page).toHaveTitle(/Amazon.fr/);

  // 2. Accepter les cookies (si la popup est présente)
  const acceptCookies = page.locator('#sp-cc-accept'); 
    if (await acceptCookies.isVisible()) {
      await acceptCookies.click();
    }
  
  // 3. Rechercher des souris sans fil dans la barre de recherche
  await page.fill('#twotabsearchtextbox', SEARCH_TERM);
  await page.keyboard.press('Enter');
//   await page.waitForLoadState('networkidle');

  // 4. Sélectionner le premier produit de la liste
  const firstProduct = page.getByRole('link', { name: 'Logitech M185 Souris Sans Fil, 2.4 GHz avec Mini Récepteur USB, Longévité de la Pile 12 Mois, Résolution du Capteur 1000 PPP, Ambidextre, Compatible PC, Mac, Ordinateur Portable - Gris/Noir', exact: true })
  await firstProduct.click();
//   await page.waitForLoadState('networkidle');

  // 5. Ajouter l'article au panier
  const addToCartButton = page.getByRole('button', { name: 'Ajouter au panier', exact: true });
  await expect(addToCartButton).toBeVisible();
  await addToCartButton.click();
//   await page.waitForSelector('#sw-atc-confirmation');

  // 6. Aller au panier
  await page.locator('#nav-cart').click();
  await expect(page).toHaveURL(/cart/);
  await expect(page.locator('.sc-list-item')).toHaveCount(1);

  console.log('Test réussi : Produit ajouté au panier');
});