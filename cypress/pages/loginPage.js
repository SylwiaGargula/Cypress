class loginPage {
    elements = {
        email : () => cy.get('[data-test="auth-login-email"]'),
        password : () => cy.get('[data-test="auth-login-password"]'),
        submit : () => cy.get('[data-test="auth-login-submit"]'),
    }

    typeEmailAddress(email){
        this.elements.email().type(email)
    }

    typePassword(password){
        this.elements.password().type(password)
    }

    clickSubmit(){
        this.elements.submit().click()
    }
}

module.exports = new loginPage()