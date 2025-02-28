import { test } from '@playwright/test';
import { HomePage } from '../page_object/HomePage';
import { SearchResultsPage } from '../page_object/SearchResultsPage';
import { ProductPage } from '../page_object/ProductPage';
import { CartPage} from '../page_object/CartPage';

const BASE_URL = 'https://www.amazon.fr';
const SEARCH_TERM = 'souris sans fil';

test('Commander des souris sans fil sur Amazon', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchResultsPage = new SearchResultsPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await homePage.goto(BASE_URL);
  await homePage.acceptCookies();
  await homePage.searchProduct(SEARCH_TERM);

  await searchResultsPage.selectFirstProduct();
  await productPage.addToCart();

  await cartPage.goToCart();
  await cartPage.verifyProductInCart();

  console.log('Test réussi : Produit ajouté au panier');
});
