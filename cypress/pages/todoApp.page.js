class todoApp {
     elements = {
        input : () => cy.get('[data-cy="add-todo"]'),
        addButton : () => cy.get('#add-btn'),
        counter : () => cy.get('p.corner'),
        allItems : () => cy.get('#all'),
        activeItems : () => cy.get('#active'),
        completedItems : () => cy.get('#completed'),
        clearCompleted: () => cy.get('#clear-completed'),
        appName : () => cy.get('header.card'),
        appFooter : () => cy.get('footer > p'),
        list : () => cy.get('[data-cy="todo"]'),
        removeIcon : () => cy.get('.clear').invoke('show')
    }

    createItem(names) {
        names.forEach(item => {
            this.elements.input().type(item+'{enter}')
    }); 
    }

    showAllItems() {
        this.elements.allItems().click()
    }

    showActiveItems() {
        this.elements.activeItems().click()
    }

    showCompletedItems() {
        this.elements.completedItems().click()
    }

    checkLeftCounter(number) {
        this.elements.counter().should('have.text', number + ' items left')
    }

    clearCompleted() {
        this.elements.clearCompleted().click()

    }

    dragAndDropItem() {
        this.elements.itemCheckbox()
    }

    getListItem(name) {
        this.elements.list().should('have.text',name)
    }

    findItem(name) {
        this.elements.list().find(name)
    }

    markAsCompleted(index) {
        cy.get(':nth-child(' + index + ') > .cb-container > .cb-input').click()
    }

    removeItem() {
        this.elements.removeIcon().click({ force: true })
    }

    getItem(index) {
        cy.get('.todos > :nth-child(' + index + ')')
    }
}

module.exports = new todoApp()