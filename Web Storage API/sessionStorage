/// localStorage vs sessionStorage both work on browser 
// 10mb, work permanent vs 5mb, till use tab
//// sessionStorage
// sessionStorage.setItem("user", "she");
const username = sessionStorage.setItem("user", "she");
console.log(username);

// remove
sessionStorage.removeItem("user");

// clear all
sessionStorage.clear();

const user = {id: "109", name:"her"};
sessionStorage.setItem("user", JSON.stringify(user));
const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);
