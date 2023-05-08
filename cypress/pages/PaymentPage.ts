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
    }

    enterCardNumber(uCardNumber:string) {
        this.elements.cardNumberField().type(uCardNumber)
    }

    enterCVC(uCVC:string) {
        this.elements.cvcField().type(uCVC)
    }

    enterExpiryMonth(uExpiryMonth:string) {
        this.elements.expiryMonthField().type(uExpiryMonth)
    }

    enterExpiryYear(uExpiryYear:string) {
        this.elements.expiryYearField().type(uExpiryYear)
    }

    clickConfirmOrder() {
        this.elements.confirmOrderButton().click()
    }

    clickDownloadInvoice() {
        this.elements.downloadInvoiceButton().click()
    }

    

}
export default new Payment();
require('cypress-xpath')