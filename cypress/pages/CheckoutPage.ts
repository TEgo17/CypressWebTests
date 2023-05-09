class Checkout {

    elements = {
        placeOrderButton : () => cy.xpath("//*[text()='Place Order']")  
    }
    
    placeOrder() {
        this.elements.placeOrderButton().click()
        cy.log('clicked the place order button to confirm and place the order')
    }
}
export default new Checkout();
require('cypress-xpath')