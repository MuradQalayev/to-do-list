**Simple To-Do List App with React.js**
**This is a simple to-do list application built using React.js. The application allows users to add, delete, and mark tasks as completed.**
Features
Add Task: Users can add tasks to the to-do list by entering them in the input field and pressing the "Add" button.
Delete Task: Users can delete tasks from the to-do list by clicking on the "Delete" button next to each task.
Mark as Completed: Users can mark tasks as completed by checking the checkbox next to each task.
Local Storage: The application uses local storage to persist the to-do list data, so tasks will be saved even if the user refreshes the page.
Components
The application is divided into the following components:

App: The main component that renders the entire application. It manages the state of the to-do list and contains the logic for adding, deleting, and marking tasks as completed.
NewToDoForm: A form component for adding new tasks to the to-do list. It consists of an input field for entering the task and a button for submitting the form.
ToDoList: A list component for displaying the to-do list. It receives the list of tasks as props and renders each task with options to mark as completed or delete.
ToDoItem: Inside of ToDoItem we created a new list function which called ToDoItem
Usage
To run the application locally:

Clone this repository to your local machine.
Navigate to the project directory.
Install dependencies by running npm install.
Start the development server by running npm start.
Open your web browser and go to http://localhost:5174  to view the application.
Technologies Used
React.js
HTML
CSS
Contributing
Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

As reference i used @WebDevSimplified 
