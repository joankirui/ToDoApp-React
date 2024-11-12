# ToDo React App
## User Story 1: Input Field for Adding Todos
As a user, I want to be able to add new tasks to my todo list so that I can keep track of things I need to do.
Acceptance Criteria:
An input field is provided where users can type in a new task.
Pressing the "Enter" key adds the task to the todo list.
The input field is cleared after the task is added.

## User Story 2: Display List of Todos
As a user, I want to see a list of all my tasks so that I can know what I need to do.
Acceptance Criteria:
Each task is displayed as a list item in the todo list.
The list is updated dynamically as tasks are added or removed.


## User Story 3: Mark Todos as Completed
As a user, I want to be able to mark tasks as completed so that I can see which tasks I have finished.
Acceptance Criteria:
Clicking on a task marks it as completed by striking through the text and changing its background color.
Clicking on a completed task marks it as not completed by removing the strike-through and restoring the original background color.

## User Story 4: Remove Todos
As a user, I want to be able to remove tasks from my todo list so that I can keep my list up to date.
Acceptance Criteria:
Each task has a delete button.
Clicking the delete button removes the task from the list.

## User Story 5: Persist Todos in Local Storage
As a user, I want my tasks to be saved in local storage so that they persist even after I close the browser.
Acceptance Criteria:
Tasks are saved to local storage whenever they are added or removed.
When the app loads, it reads tasks from local storage and displays them