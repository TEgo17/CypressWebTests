class Products {

    elements = {
        searchField : () => cy.xpath("//input[@id='search_product']"),
        searchButton : () => cy.xpath("//button[@id='submit_search']"),
        continueShoppingButton : () => cy.xpath("//div[@class='modal-footer']/descendant::button"),
    }

    searchProduct(uSearch:string) {
        this.elements.searchField().type(uSearch)
        cy.log('enter the user search query into the search bar')
    }

    clickSearch() {
        this.elements.searchButton().click()
        cy.log('click  the search button to search for the user query')
    }

    addProductToCart(productId:string) {
        cy.xpath(`//div[@class='productinfo text-center']/descendant::a[@data-product-id=${productId}]`).click()
        this.elements.continueShoppingButton().click()
        cy.log('adding the product the user selects to the cart')
    }

}
export default new Products();
require('cypress-xpath')