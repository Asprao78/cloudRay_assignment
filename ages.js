const fs = require("node:fs");

ages = [{
    "name": "Alice",
    "age": 30,
    "city": "New York"
},
{
    "name": "Bob",
    "age": 25,
    "city": "Los Angeles"
},
{
    "name": "Charlie",
    "age": 35,
    "city": "Chicago"
}];

ages.push({"name":"Srinivas","age":32,"city":"Hyderabad"},{"name":"Gina","age":35,"city":"London"});
finalAges = ages.sort((a,b) => a.age-b.age);
console.log(finalAges);
