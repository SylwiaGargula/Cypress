import loginPage from "../pages/loginPage"
import cvPage from "../pages/cvPage"
import paymentPage from "../pages/paymentPage"

describe('Payment testing', () => {
    it('Incorrect payment data', () => {
        cy.visit('')
        cy.fixture('data').then((data) => {
            loginPage.typeEmailAddress(data.email)
            loginPage.typePassword(data.password)
        })
        loginPage.clickSubmit()
        cvPage.waitForRequest()
        cvPage.containsCV('CV - TEST')
        cvPage.openCV()
        cvPage.downloadCV()

        paymentPage.choosePaymentPlan()
        paymentPage.submitPaymentPlan()

        paymentPage.typeCardNumber('4000 000 000 0051')
        paymentPage.typeExpirationDate('10/23')
        paymentPage.typeCVVnumber('123')
        paymentPage.typeOwner('Vincent Testowy')
        paymentPage.submitPayment()    
    })
})

