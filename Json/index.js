const data = require("employee_data.json");
console.log(data);

// index 0
console.log(data.Employees[0]);
console.log(data.Employees[0].name);

// modify data
data.Employees[0].Age = "30";
console.log(data.Employee[0].age);

// delete data
delete.Employees[1];
console.log(data);

