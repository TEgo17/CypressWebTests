class Payment {

    elements = {
        nameOnCardField : () => cy.xpath("//input[@name='name_on_card']"),
        cardNumberField : () => cy.xpath("//input[@name='card_number']"),
        cvcField : () => cy.xpath("//input[@name='cvc']"),
        expiryMonthField : () => cy.xpath("//input[@name='expiry_month']"),
        expiryYearField : () => cy.xpath("//input[@name='expiry_year']"),
        confirmOrderButton : () => cy.xpath("//*[@class='form-control btn btn-primary submit-button']"),
        downloadInvoiceButton : () => cy.xpath("//*[text()='Download Invoice']")
    }
    
    enterNameOnCard(uNameOnCard:string) {
        this.elements.nameOnCardField().type(uNameOnCard)
        cy.log('entered the name on card for the user')
    }

    enterCardNumber(uCardNumber:string) {
        this.elements.cardNumberField().type(uCardNumber)
        cy.log('entered the card number for the user')
    }

    enterCVC(uCVC:string) {
        this.elements.cvcField().type(uCVC)
        cy.log('entered the CVC for the card of the user')
    }

    enterExpiryMonth(uExpiryMonth:string) {
        this.elements.expiryMonthField().type(uExpiryMonth)
        cy.log('entered the expiry month for the card of the user')
    }

    enterExpiryYear(uExpiryYear:string) {
        this.elements.expiryYearField().type(uExpiryYear)
        cy.log('entered the expiry year for the card of the user')
    }

    clickConfirmOrder() {
        this.elements.confirmOrderButton().click()
        cy.log('clicked the confirm order button to confirm the order and proceed to the invoice page')
    }

    clickDownloadInvoice() {
        this.elements.downloadInvoiceButton().click()
        cy.log('clicked the download invoice  button to download the order invoice')
    }

    

}
export default new Payment();
require('cypress-xpath')