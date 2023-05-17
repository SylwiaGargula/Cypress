class cvPage {
    elements = {
        cvList : () => cy.get('[data-test="user-admin-grid-content"]'),
        cv : () => cy.get(':nth-child(3) > :nth-child(1) > .yx5Kr'),
        downloadButton : () => cy.get(':nth-child(3) > .UtgBs > .mllEk > .VBGyA > .gOyyD > .DGmXc'),

    }
    waitForRequest() {
        cy.intercept('/ft/graphql').as('cvPage')
        cy.wait('@cvPage', {timeout: 8000})
    }

    containsCV(name){
        this.elements.cvList().contains(name)
    }

    openCV(){
        this.elements.cv().click()
    }

    downloadCV(){
        this.elements.downloadButton().click()
    }
}

module.exports = new cvPage()