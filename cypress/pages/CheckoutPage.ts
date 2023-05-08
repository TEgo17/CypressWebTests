class Checkout {

    elements = {
        placeOrderButton : () => cy.xpath("//*[text()='Place Order']")
    }
    
    placeOrder() {
        this.elements.placeOrderButton().click()
    }

}
export default new Checkout();
require('cypress-xpath')