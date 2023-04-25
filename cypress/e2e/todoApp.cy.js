import todoApp from "../pages/todoApp.page"
describe( "Todo Application", () => {

    const items = ['first' , 'second' , 'third' , 'fourth']

    beforeEach( () => {
        cy.visit('https://todo-app-for-cyclope.netlify.app/')
    }
    )   
    it('User creates item', () => {
        const names = items[0]
        todoApp.createItem(names)
        todoApp.getListItem(names[0])
    })

    it('User marks as completed item', () => {
        const names = ['completed']
        todoApp.createItem(names)
        todoApp.checkLeftCounter(1)
        todoApp.markAsCompleted(1)
        todoApp.checkLeftCounter(0)
    })

    it('User wants to see all items', () => {
        const names = ['first','completed']
        todoApp.createItem(names)
        todoApp.markAsCompleted(1)
        todoApp.showAllItems()
        todoApp.checkLeftCounter(1)
    })

    it('User wants to see active items', () =>{
        const names = ['first','second','third']
        todoApp.createItem(names)
        todoApp.checkLeftCounter(3)
        todoApp.markAsCompleted(1)
        todoApp.showActiveItems()
        todoApp.checkLeftCounter(2)
    })

    it('User wants to see completed items', () => {
        const names = ['first','second','third']
        todoApp.createItem(names)
        todoApp.checkLeftCounter(3)
        todoApp.markAsCompleted(1)
        todoApp.markAsCompleted(2)
        todoApp.showCompletedItems()
        todoApp.checkLeftCounter(1)
    })

    it('User clears all completed items', () => {
        const names = ['first','second','third']
        todoApp.createItem(names)
        todoApp.checkLeftCounter(3)
        todoApp.markAsCompleted(1)
        todoApp.markAsCompleted(2)
        todoApp.clearCompleted()
        todoApp.checkLeftCounter(1)
    })

    it('User removes item', () => {
        const names = ['first']
        todoApp.createItem(names)
        todoApp.checkLeftCounter(1)
        todoApp.removeItem()
        todoApp.checkLeftCounter(0)
    })

    it('User creates empty item', () => {
        const names = ['']
        todoApp.createItem(names)
        todoApp.checkLeftCounter(0)
    })

    it.only('User changes order of elements', () => {
    
    })
})


