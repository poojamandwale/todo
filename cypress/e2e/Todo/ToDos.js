class ToDoPage {
    // Locators
    elements = {
      taskInput: () => cy.get('[data-testid="text-input"]'),
      taskList: () => cy.get('[data-testid="todo-item-label"]'),
      completeCheckbox: () => cy.get('.toggle').should('exist').last(),
      completeTaskCheckbox: () => cy.get('[data-testid="todo-item-toggle"]'),
    };
  
    // Methods
    visit() {
      cy.visit('https://todomvc.com/examples/react/dist/'); 
    }

    addEmptyTask()
    {
      this.elements.taskInput().type(' ').type('{enter}');
    }
  
    addTask(taskName) 
    {
      this.elements.taskInput().type(taskName).type('{enter}');
    }


    markTaskAsComplete() {
      this.elements.completeTaskCheckbox().click();
    }

    markLastTaskAsComplete() {
      this.elements.completeCheckbox().check();
    }

    markAllTaskCompleted()
    {
      cy.get('.toggle').click({ multiple: true });
    }

    editTask() 
    {
      this.elements.taskList()
      .should('be.visible')
      .dblclick({ force: true });
      cy.get('.todo-list li.editing .edit').should('be.visible').clear().type('Updated Task').type('{enter}'); 


    }

    deleteTask(taskName) 
    {
      cy.contains('.todo-list li', taskName)
      .find('.destroy')
      .invoke('show') // Force visibility of coss
      .click();
      cy.get('.todo-list').should('not.contain', taskName);
    }

    filterActiveTask()
    {
      cy.contains('.filters a', 'Active').click();
      cy.get('.todo-list li').should('have.length', 2).and('not.contain', 'Task3');
    }
    filterCompletedTask()
    {
      cy.contains('.filters a', 'Completed').click();
      cy.get('.todo-list li').should('have.length', 1).and('contain', 'Task3');
    }

    filterAllTask()
    {
    cy.contains('.filters a', 'All').click();
    cy.get('.todo-list li').should('have.length', 3);
    }

    clearAndVerifyCompletedTask()
    {
      cy.contains('Clear completed').click();
      cy.get('.todo-list li').should('not.exist');
    }

  }
  
  export default ToDoPage;