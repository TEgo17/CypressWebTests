class Products {

    elements = {
        searchField : () => cy.xpath("//input[@id='search_product']"),
        searchButton : () => cy.xpath("//button[@id='submit_search']"),
        continueShoppingButton : () => cy.xpath("//div[@class='modal-footer']/descendant::button"),
        shirt : () => cy.xpath("//div[@class='modal-footer']/descendant::button")
    }

    searchProduct(uSearch:string) {
        this.elements.searchField().type(uSearch)
    }

    clickSearch() {
        this.elements.searchButton().click()
    }

    addProductToCart(productId:string) {
        cy.xpath(`//div[@class='productinfo text-center']/descendant::a[@data-product-id=${productId}]`).click()
        this.elements.continueShoppingButton().click()
    }

}
export default new Products();
require('cypress-xpath')