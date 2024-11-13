
import ToDoPage from '../Todo/ToDos.js';
const toDoPage = new ToDoPage();

describe('To-Do List - Automation of test cases', () => {
  beforeEach(() => {
    toDoPage.visit();
  });
// Positive Scenario - To verify addition of new task
  it('verify - adding a new task', () => {
    toDoPage.addTask('New Task');
    //  toDoPage.verifyTaskExists('New Task');
  });

//Positive Scenario - To verify beaviour when a task is completed
  it('Verify - complition of a task', () => {
    toDoPage.addTask('Complete Task');
    toDoPage.markTaskAsComplete('Complete Task');
    cy.contains('[data-testid="todo-item"]', 'Complete Task').should('have.class', 'completed');
  });

//Positive Ssenario - To verify if a task is editable 
  it.only('Verify - editing an existing task', () => {
    toDoPage.addTask('Old Task');
    toDoPage.editTask();
    //toDoPage.verifyTaskExists('Updated Task');
    //toDoPage.verifyTaskNotExists('Old Task');
  });

//Positive Scenario - To verify if a non- completed task is deleted from list
  it('Verify - deleting a task', () => {
    const taskName = 'Delete Task';
    toDoPage.addTask(taskName);
    toDoPage.deleteTask(taskName);
  });

//Positive Scenario - To verify filters
  it('Verify -filtering of Active, Completed, and All Task', () => {
    // Add multiple tasks
    toDoPage.addTask('Task1');
    toDoPage.addTask('Task2');
    toDoPage.addTask('Task3');
    toDoPage.markLastTaskAsComplete();
    toDoPage.filterActiveTask();
    toDoPage.filterCompletedTask();
    toDoPage.filterAllTask();
  });
  
//Positive Scenario - To verify filter action of clear completed task 
  it('Verify - clear all completed tasks', () => {
    toDoPage.addTask('Demo1');
    toDoPage.addTask('Demo2');
    toDoPage.markAllTaskCompleted();
    toDoPage.clearAndVerifyCompletedTask();
  });

  // Negative Scenario - To verify if empty task can be added
  it('verify - adding an empty task', () => {
    toDoPage.addEmptyTask();
    //verify no task count has been added
  });

});