/// local storage = permanent store item 
//console.log(localStorage); ///to check localStorage on window 
// setItem(key, value)
localStorage.setItem("userName", "Sheuly");
localStorage.setItem("password", "Sheuly");

// getItem(key)
const userName = localStorage.getItem("userName");
const password = localStorage.getItem("password");
console.log(userName, password);

// update data
localStorage.setItem("userName", "Shelpy");
localStorage.setItem("password", "Sheuly");

/// remove data = removeIteam(key)
localStorage.removeIteam("userName");

/// on string 
//// setItem(key, value)
const countries = ["Japan", "Chna", "Australia"]
localStorage.setItem("countries", JSON.stringify(countries));

// getItem(key)
const countrieslist = JSON.parse(localStorage.getItem("countries"));
console.log(countrieslist);

// clear all
localStorage.clear();
