// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
//document refers to the entire HTML document.

//querySelector('#add-employees-btn') is a method that searches the document for the first element that matches the specified CSS selector #add-employees-btn. In this case, it is looking for an element with the id of add-employees-btn.


//const addEmployeesBtn declares a constant variable named addEmployeesBtn to store the reference to the HTML element found by document.querySelector('#add-employees-btn').


//So, addEmployeesBtn will store a reference to the HTML element with the id add-employees-btn, allowing you to interact with that element in your JavaScript code.

// Collect employee data

  // TODO: Get user input to create and return an array of employee objects
  function collectEmployees() {
    const employees = [];

//teacher code
const collectEmployees = function () {
let userInput = prompt('Please enter your first name');
let lastNameInput;
let salary;

//! Error handling
if (typeof firstNameInput === Number){
  alert ('Please enter a valid value');
  } else {
    firstNameInput = prompt
  }
  
  
if (typeof salaryInput === Number){
alert ('Please enter a valid value');
} else {
  salaryInput = prompt
}




}
    //!Error
    if (typeof userInput, !++ String) {


    }

  //The collectEmployees function is used to gather information about multiple employees from the user and store it in an array called employees. The function initializes an empty array called employees to store the employee data that will be collected.



    let addEmployee = true;
    while (addEmployee) {
        const firstName = prompt("Enter the employee's first name:");
        const lastName = prompt("Enter the employee's last name:");
        let salary = prompt("Enter the employee's salary:");
        
      //a while loop is being used to repeatedly prompt the user to enter information for a new employee until the user chooses to stop adding employees. Here's what's happening:

      //let addEmployee = true;: This initializes a variable addEmployee to true, which will be used to control the loop. As long as addEmployee remains true, the loop will continue to prompt for employee information.

      //while (addEmployee) {: This starts a while loop that will continue to run as long as addEmployee is true. 


        // Validate salary input
        if (isNaN(salary)) {
            salary = 0;
        } else {
            salary = parseInt(salary);
        }

        //Checking whether the salary input is not a number using the isNaN() function. If the salary is not a number, it sets the salary to 0. If the salary is a number, it then converts it to an integer using parseInt(). This ensures that the salary is either set to 0 if it's not a number or converted to an integer if it is a number.

        const employee = {
            firstName: firstName,
            lastName: lastName,
            salary: salary
        };

        employees.push(employee);
 //employees.push(employee);: This line adds the employee object (containing the details of the employee such as first name, last name, and salary) to the employees array. This allows for storing multiple employee objects in the array.

        const continueAdding = confirm("Do you want to add another employee?");
        if (!continueAdding) {
            addEmployee = false;

      
        //const continueAdding = confirm("Do you want to add another employee?");: This line displays a confirmation dialog box to the user with the message "Do you want to add another employee?" The confirm function returns true if the user clicks "OK" and false if the user clicks "Cancel". The result is stored in the continueAdding variable.

        //if (!continueAdding) { addEmployee = false; }: This if statement checks if the user chose not to continue adding another employee by clicking "Cancel" in the confirmation dialog. If continueAdding is false, then the variable addEmployee is set to false, likely indicating that the process of adding more employees should stop.
        }
    }

    return employees;

    //The return employees; statement in a function indicates that the function should return the employees array as its output. This means that when the function is called and executed, it will process the input data (if any), perform the necessary operations, and then return the employees array containing the information of all the employees that were added during the execution of the function. This statement would be used at the end of the function to return the final array of employees after the user has finished adding all the employees they wanted to include.


}

// Display the average salary

  // TODO: Calculate and display the average salary

  const displayAverageSalary = function(employeesArray) {
    // Calculate the total salary
    const totalSalary = employeesArray.reduce((acc, employee) => acc + employee.salary, 0);


    //This line uses the reduce method on the employeesArray to calculate the total salary of all employees. 

//The reduce method takes two arguments: a callback function and an initial value (in this case, 0).

//he callback function takes two parameters: acc (accumulator) and employee. It adds the salary of each employee to the accumulator.

//The reduce method iterates over each employee in the employeesArray, summing up their salaries to get the total salary.


    // Calculate the average salary
    const averageSalary = totalSalary / employeesArray.length;

    //After calculating the total salary, this line calculates the average salary by dividing the total salary by the number of employees in the employeesArray.


    // Display the average salary and the number of employees
    console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employeesArray.length} employees`);

    //Finally, this line logs the average salary and the number of employees to the console.
};




// Select a random employee
  // TODO: Select and display a random employee

  const getRandomEmployee = function(employeesArray) {
    // Generate a random index within the range of the employeesArray length
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
    //This line declares a function named getRandomEmployee that takes an employeesArray as a parameter. This function is intended to select a random employee from the provided array.


    // Get the random employee object from the employeesArray
    const randomEmployee = employeesArray[randomIndex];

    //This line generates a random index within the range of the employeesArray length using the Math.random() and Math.floor() functions.

    //Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

  //By multiplying Math.random() with the length of the employeesArray and flooring the result with Math.floor(), it ensures that the random index is within the valid range of indices in the array.

    // Display the full name of the random employee
    console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);

    //This line uses console.log() to output a message to the console.The message is formatted using template literals, denoted by the backticks (`).${randomEmployee.firstName} and ${randomEmployee.lastName} are placeholders that will be replaced with the first name and last name of the randomly selected employee.The firstName and lastName properties are accessed from the randomEmployee object, which represents the randomly selected employee from the employeesArray.





};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
