class demoPage {
    elements ={
        bankPayment : () => cy.get('[data-testid="bank-payment-btn"]'),
        amount : () => cy.get('[data-testid="amount-input"]'),
        email : () => cy.get('[data-testid="email-input"]'),
        checkbox : () => cy.get('[data-testid="checkmark-icon"]'),
        swedBank : () => cy.get('[for=":rc:"]'),
        payButton : () => cy.get('[data-testid="bank-payment-form"]').contains('PAY'),
        errorMessage : () => cy.get('[data-testid="bank-payment-form"]').contains('You have to agree to the terms and conditions and privacy policy'),
    }

    chooseBankPayment(){
        this.elements.bankPayment().click()
    }

    typeAmount(value){
        this.elements.amount().type(value)
    }

    typeEmailAddress(email){
        this.elements.email().type(email)
    }

    isVisibleCheckbox(){
        this.elements.checkbox().should('be.visible')
    }

    clickCheckbox(){
        this.elements.checkbox().click()
    }

    chooseSwedBank(){
        this.elements.swedBank().click()
    }

    clickPay(){
        this.elements.payButton().click()
    }

    isVisibleErrorMessage(){
        this.elements.errorMessage().should('be.visible')
    }

    checkErrorMessageColor(){
        this.elements.errorMessage().should('have.css', 'color', 'rgb(255, 59, 48)')
    }

    waitForRequest(){
        cy.intercept('https://*/login/*').as('bankPage')
        cy.wait('@bankPage')
    }
}

module.exports = new demoPage()