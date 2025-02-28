import { test } from '@playwright/test';
import { AmazonHomePage } from '../page_object/AmazonHomePage';
import { ProductPage } from '../page_object/ProductPage';
import { CartPage } from '../page_object/CartPage';

// URL Amazon France
const BASE_URL = 'https://www.amazon.fr';
const SEARCH_TERM = 'baskets';

// Test principal
test('Commander des souris sans fil sur Amazon', async ({ page }) => {
  const amazonHomePage = new AmazonHomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // 1. Aller sur la page d'accueil d'Amazon
  await amazonHomePage.goto(BASE_URL);
  await amazonHomePage.acceptCookies();

  // 2. Rechercher des baskets
  await amazonHomePage.searchProduct(SEARCH_TERM);

  // 3. Sélectionner le premier produit
  await amazonHomePage.selectFirstProduct('link', { name: 'Logitech M185 Souris Sans Fil, 2.4 GHz avec Mini Récepteur USB, Longévité de la Pile 12 Mois, Résolution du Capteur 1000 PPP, Ambidextre, Compatible PC, Mac, Ordinateur Portable - Gris/Noir', exact: true });

  // 4. Ajouter l'article au panier
  await productPage.addToCart();

  // 5. Aller au panier
  await cartPage.gotoCart();
  await cartPage.verifyProductInCart(1);

  console.log('Test réussi : Produit ajouté au panier');
});


