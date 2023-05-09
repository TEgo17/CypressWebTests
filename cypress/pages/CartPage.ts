class Cart {

    elements = {
        //removeItemButton : () => cy.xpath("//*[@class='cart_delete']"),
        checkoutButton : () => cy.xpath("//*[@class='btn btn-default check_out']")
    }

    removeItemFromCart(productId:string) {
        cy.xpath(`//div[@class='table-responsive cart_info']/descendant::a[@data-product-id=${productId}]`).click()
        cy.log('clicked the remove from cart button to remove the  t-shirt')
    }

    clickCheckout() {
        this.elements.checkoutButton().click()
        cy.log('clicked the checkout button to proceed into the checkout page')
    }
}
export default new Cart();
require('cypress-xpath')
