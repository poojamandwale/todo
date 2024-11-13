**To-Do List Automation with Cypress**
This project automates the testing of a To-Do List application using the Cypress testing framework with JavaScript. 
It covers core functionalities like adding tasks, editing tasks, completing tasks, and deleting tasks in the TodoMVC React App.

**TEST SCENARIOS**

**1.Task Creation/ Adding new tasks:**
- To verify if a user can add a new task with valid inputs and is able to view in to do list.

**2. Task Completion**
- Verify that a user can mark a task as completed by clicking on the radio button.

**3. Task Editing**
- To verify if a user can edit an existing task by double clicking on the list item.
- To check if changes are saved after editing.

**4. Task Deletion**
- To verify if a user can delete a specific task by clicking on the cross button shown upon hovering on the listed item.
- To verify if the deleted task is removed

**5. Task Filters**
- Adding 3 task followed by completing last task from the list
- To verify - filtering of Active, Completed, and All Task
  
**6. Task Filters**
- To verify filter action of clear completed task
- 5. Filtering Tasks

**7. Negative Scenarios**
- Attempt to add empty tasks.

**Prerequisites**
Key dependencies used in the project:
Cypress: ^13.0.0
Node.js: >=14.0
Cypress: Cypress is included as a dev dependency in this project.
Browser: Chrome browser for running Cypress tests.

**Setup Instructions**
Clone the Repository:
git clone <repository-url>
cd <repository-directory>

**Install Dependencies:** 
required dependencies installation using npm:
npm install

**Run Cypress Test Runner:** 
To open the Cypress Test Runner: npx cypress open
Choose a browser : Start **E2E** Testing in Chrome
Select the test file (TestCases.cy.js) to run.

**Project Structure**
The project follows a simple POM structure:
📂 cypress
 ┣ 📂 e2e
 ┃ ┣ 📜 TestCases.cy.js       # Test cases for ToDo tasks
 ┣ 📂 ToDo
 ┃ ┣ 📜 ToDos.js              # Locators and Events for task
 ┣ 📂 fixtures                # Test data (if applicable)
 ┣ 📂 support
 ┃ ┗ 📜 commands.js           # Custom commands for Cypress
 📜 cypress.config.js         # Cypress configuration file
 📜 package.json              # Project dependencies
 
Here,
TestCases.cy.js - placed Test cases for ToDo tasks in mocha framework of cypress
ToDos.js - placed locators and events that have been called in the testcases 



