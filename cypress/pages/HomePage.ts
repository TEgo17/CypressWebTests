class Home {

    elements = {
        productsButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/products']"),
        cartButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/view_cart']"),
        loginButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/login']"),
        logoutButton : () => cy.xpath("//div[@class='shop-menu pull-right']/descendant::a[@href='/logout']")
        
    }

    clickCartPage() {
        this.elements.cartButton().click()
    }

    clickProductsPage() {
        this.elements.productsButton().click()
    }

    clickLoginPage() {
        this.elements.loginButton().click()
    }

}
export default new Home();
require('cypress-xpath')