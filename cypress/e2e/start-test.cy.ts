import loginPage from "../pages/LoginPage"
import homePage from "../pages/HomePage"
import productsPage from "../pages/ProductsPage"
import cartPage from "../pages/CartPage"
import checkoutPage from "../pages/CheckoutPage"
import paymentPage from "../pages/PaymentPage"

import 'cypress-xpath'


it('Web Test Cases', () => {

    // visit the home page of AutomationExercise
    cy.visit('https://www.automationexercise.com/')
    cy.log('Visiting the Main Page of the AutomationExercise site')

    // -- Login Page -- 
    homePage.clickLoginPage();
    cy.log('Calling the clickLoginPage() method to switch to the login page')

    loginPage.enterEmail("thamodh@email.com");
    cy.log('Calling the enterEmail() method to enter user email')

    loginPage.enterPassword("Password");
    cy.log('Calling the enterPassword() method to enter user password')

    loginPage.clickLoginButton();
    cy.log('Calling the clickLoginButton() method to enter the site by logging in')

    // check to see if the login was successful
    homePage.elements.logoutButton().should('have.text',' Logout');
    cy.log('Checking to see if the login was successful')

    //  -- Products Page -- 
    homePage.clickProductsPage();
    cy.log('Calling the clickProductsPage() method to switch to the products page')
    
    productsPage.searchProduct("tshirts");
    cy.log('Calling the searchProduct() method to search for tshirts')

    productsPage.clickSearch();
    cy.log('Calling the clickSearch() method to click the search button')

    productsPage.addProductToCart("2");
    cy.log('Calling the addProductToCart() method to add Product #2 to the cart')

    productsPage.addProductToCart("28");
    cy.log('Calling the addProductToCart() method to add Product #28 to the cart')

    // -- Cart Page -- 
    homePage.clickCartPage();
    cy.log('Calling the clickCartPage() method to switch to the cart page')

    cartPage.removeItemFromCart("2");
    cy.log('Calling the removeItemFromCart() method to remove Product #2 from the cart page')

    cartPage.clickCheckout();
    cy.log('Calling the clickCheckout() method to click the checkout button')

    checkoutPage.placeOrder();
    cy.log('Calling the placeOrder() method to click the place order button')

    // -- Payment Page -- 
    paymentPage.enterNameOnCard("Thamodh Egodawatte");
    cy.log('Calling the enterNameOnCard() method to enter cardholders name')

    paymentPage.enterCardNumber("1111 2222 3333 4444");
    cy.log('Calling the enterCardNumber() method to enter card number')

    paymentPage.enterCVC("123");
    cy.log('Calling the enterCVC() method to enter card cvc number')

    paymentPage.enterExpiryMonth("01");
    cy.log('Calling the enterExpiryMonth() method to enter card expiry month')

    paymentPage.enterExpiryYear("2030");
    cy.log('Calling the enterExpiryYear() method to enter card expiry year')

    paymentPage.clickConfirmOrder();
    cy.log('Calling the clickConfirmOrder() method to click the confirm order button')

    
    // -- Invoice Page (end of test) -- 
    cy.window().then((win) => {

      const downloadInvoiceButton = cy.get('a').contains('Download Invoice')

      win.document.addEventListener('click', function clickListener()  {
        win.document.removeEventListener('click', clickListener)
        setTimeout(() => win.location.reload(), 5000)
      })

      downloadInvoiceButton.click({force:true})
    })
    cy.log('Clicking the download invoice button and ending the set of web test cases')

  })
