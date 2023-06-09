class Home {

    elements = {
        productsButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/products']"),
        cartButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/view_cart']"),
        loginButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/login']"),
        logoutButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/logout']")
    }

    clickCartPage() {
        this.elements.cartButton().click()
        cy.log('clicked the cart button at the top of the nav bar')
    }

    clickProductsPage() {
        this.elements.productsButton().click()
        cy.log('clicked the products button at the top of the nav bar')
    }

    clickLoginPage() {
        this.elements.loginButton().click()
        cy.log('clicked the login button at the top of the nav bar')
    }

}
export default new Home();
require('cypress-xpath')