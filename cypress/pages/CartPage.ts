class Cart {

    elements = {
        //removeItemButton : () => cy.xpath("//*[@class='cart_delete']"),
        checkoutButton : () => cy.xpath("//*[@class='btn btn-default check_out']")
    }

    removeItemFromCart(productId:string) {
        cy.xpath(`//div[@class='table-responsive cart_info']/descendant::a[@data-product-id=${productId}]`).click()
    }

    clickCheckout() {
        this.elements.checkoutButton().click()
    }
}

export default new Cart();
require('cypress-xpath')
