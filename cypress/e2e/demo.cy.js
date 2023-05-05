import homePage from '../pages/homePage'
import demoPage from '../pages/demoPage'

describe('Demo page', () => {
    it('Test Bank Payment option', () => {
        cy.visit('')
        homePage.acceptCookies()
        homePage.openDemosPage()
        homePage.openTryItPage()
       
        demoPage.chooseBankPayment()
        cy.fixture('data').then((data) => {
            demoPage.typeAmount(data.amount) 
            demoPage.typeEmailAddress(data.email)
        })
        
        demoPage.isVisibleCheckbox()
        demoPage.chooseSwedBank()
        demoPage.clickPay()
        demoPage.isVisibleErrorMessage()
        demoPage.checkErrorMessageColor()
        demoPage.clickCheckbox()
        demoPage.clickPay()
        demoPage.waitForRequest()
    })

    it('Revisit website', () => {
        cy.visit('')
        homePage.acceptCookies()
        cy.visit('')
        homePage.checkCookie()

    })
})
