class paymentPage {
    elements = {
        paymentPlan : () => cy.get('[data-test="cart-plan-choose-14611"]'),
        submitButton : () => cy.get('[data-test="cart-plan-continue"]'),
        cardNumber : () => cy.get('#ccNum'),
        expirationDate : () => cy.get('#expirationDate'),
        CVVnumber : () => cy.get('#ccCVV'),
        owner : () => cy.get('cardholderName'),
        payButton : () => cy.get('[data-test="cart-pay-securely"]')
    }

    choosePaymentPlan(){
        this.elements.paymentPlan().click()
    }

    submitPaymentPlan(){
        this.elements.submitButton().click()
    }
    
    typeCardNumber(number){
        this.elements.cardNumber().type(number)
    }

    typeExpirationDate(date){
        this.elements.expirationDate().type(date)
    }

    typeCVVnumber(number){
        this.elements.CVVnumber().type(number)
    }

    typeOwner(owner){
        this.elements.owner().type(owner)
    }

    submitPayment(){
        this.elements.payButton().click()
    }
}
module.exports = new paymentPage()