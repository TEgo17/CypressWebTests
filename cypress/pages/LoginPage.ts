class Login {

    elements = {
        emailField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='email']"),
        passwordField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='password']"),
        loginButton : () => cy.xpath("//div[@class='login-form']/descendant::button[@type='submit']")
    }

    enterEmail(uEmail:string) {
        this.elements.emailField().type(uEmail)
        cy.log('entered the login email for the user')
    }

    enterPassword(uPassword:string) {
        this.elements.passwordField().type(uPassword)
        cy.log('entered the password for the user')
    }

    clickLoginButton() {
       this.elements.loginButton().click()
       cy.log('clicked the login button to login as a registered user')
    }

}
export default new Login();
require('cypress-xpath')
