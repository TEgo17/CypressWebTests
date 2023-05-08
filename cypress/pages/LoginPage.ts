class Login {

    elements = {
        emailField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='email']"),
        passwordField : () => cy.xpath("//div[@class='login-form']/descendant::input[@type='password']"),
        loginButton : () => cy.xpath("//div[@class='login-form']/descendant::button[@type='submit']")
    }

    enterEmail(uEmail:string) {
        this.elements.emailField().type(uEmail)
    }

    enterPassword(uPassword:string) {
        this.elements.passwordField().type(uPassword)
    }

    clickLoginButton() {
       this.elements.loginButton().click()
    }

}
export default new Login();
require('cypress-xpath')
