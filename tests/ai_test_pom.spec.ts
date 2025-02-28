import { test } from '@playwright/test';
import { AmazonHomePage } from '../page_object/AmazonHomePage';
import { ProductPage } from '../page_object/ProductPage';
import { CartPage } from '../page_object/CartPage';

// URL Amazon France
const BASE_URL = 'https://www.amazon.fr';
const SEARCH_TERM = 'baskets';

// Test principal
test('Commander des baskets sur Amazon', async ({ page }) => {
  const amazonHomePage = new AmazonHomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // 1. Aller sur la page d'accueil d'Amazon
  await amazonHomePage.goto(BASE_URL);
  await amazonHomePage.acceptCookies();

  // 2. Rechercher des baskets
  await amazonHomePage.searchProduct(SEARCH_TERM);

  // 3. Sélectionner le premier produit
  await amazonHomePage.selectFirstProduct('Publicité sponsorisée - Homme Hoops 3.0 Low Classic Vintage Shoes Chaussures');

  // 4. Ajouter l'article au panier
  await productPage.addToCart();

  // 5. Aller au panier
  await cartPage.gotoCart();
  await cartPage.verifyProductInCart(1);

  console.log('Test réussi : Produit ajouté au panier');
});


