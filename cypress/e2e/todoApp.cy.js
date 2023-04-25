import todoApp from "../pages/todoApp.page"
describe( "Todo Application", () => {
    beforeEach( () => {
        cy.visit('https://todo-app-for-cyclope.netlify.app/')
    }
    )   
    it('User creates item', () => {
        const names = ['first']
        todoApp.createItem(names)
        todoApp.getListItem(names[0])
    })

    it('User marks as completed item', () => {
        const names = ['completed']
        todoApp.createItem(names)
        todoApp.checkCounter(1)
        todoApp.markAsCompleted(1)
        todoApp.checkCounter(0)
    })

    it('User wants to see all items', () => {
        const names = ['first','completed']
        todoApp.createItem(names)
        todoApp.markAsCompleted(1)
        todoApp.showAllItems()
        todoApp.checkCounter(1)
    })

    it('User wants to see active items', () =>{

    })

    it('User wants to see completed items', () => {

    })

    it('User clears all completed items', () => {

    })

    it('User removes item', () => {

    })

    it('User creates empty item', () => {

    })

    it('User changes order of elements', () => {

    })
})