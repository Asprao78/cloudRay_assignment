const fs = require("node:fs");

fs.readFile("heartRateDataGen_May2023.json",function(err,data){

    if(err) throw err;

    //Declare the Object array variables

    let finalObject = [];
    let dailyFrequency = 24;
    let may2023bpm = [];
    let days = 31;
    let dayObject = []
    let dayObjects = [];

    //Parse the json input into an array object
    const hr = JSON.parse(data);
   

    console.log(finalObject);


})
