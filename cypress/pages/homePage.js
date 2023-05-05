class homePage {
    elements ={
        cookies : () => cy.get('[data-testid="CookieBanner-accept-all"]'),
        demoButton : () => cy.get('#home-page-demo').contains('Demo'),
        tryItbutton : () => cy.get('[data-testid="visit-demo-page-button"]'),
        cookie : () => cy.getCookie('ajs_anonymous_id'),

    }

    acceptCookies(){
        this.elements.cookies().click()
    }

    openDemosPage(){
        this.elements.demoButton().click()
    }

    openTryItPage(){
        this.elements.tryItbutton().invoke('removeAttr', 'target').click()
    }

    checkCookie(){
        this.elements.cookie().should('not.be.NaN')
    }

}

module.exports = new homePage()