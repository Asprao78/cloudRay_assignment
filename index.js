
const fs = require("node:fs");

//Read the input json file
fs.readFile("heartrate.json", function (err, data) {
	// body...
	if (err) throw err;

	//Declare the array object variables
	
	let finalObject = [];
	let apr28 = [];
	let apr28bpm = [];
	let apr28Object = [];
	let apr29 = [];
	let apr29bpm = [];
	let apr29Object = [];
	let apr30 = [];
	let apr30bpm = [];
	let apr30Object = [];
	let may01 = [];
	let may01bpm = [];
	let may01Object = [];
	let jsonData = null;

	//Parse the json data to an array object using the JSON Parse function
	const hr = JSON.parse(data);
	
	//Number of instances of each date
	let apr28Count = 116;
	let apr29Count = 118;
	let apr30Count = 118;
	let may01Count = 120;
	
	//Creating the individual object arrays by date
	for(x=0;x<apr28Count;x++){
		apr28.push(hr[x]);
		apr28bpm.push(hr[x]["beatsPerMinute"]);
	}
	for(x=apr28Count;x<apr28Count+apr29Count;x++){
		apr29.push(hr[x]);
		apr29bpm.push(hr[x]["beatsPerMinute"]);
	}
	for(x=apr28Count+apr29Count;x<apr28Count+apr29Count+apr30Count;x++){
		apr30.push(hr[x]);
		apr30bpm.push(hr[x]["beatsPerMinute"]);
	}
	for(x=apr28Count+apr29Count+apr30Count;x<apr28Count+apr29Count+apr30Count+may01Count;x++){
		may01.push(hr[x]);
		may01bpm.push(hr[x]["beatsPerMinute"]);
	}


	let dates = [apr28,apr29,apr30,may01];
	let bpm = [apr28bpm,apr29bpm,apr30bpm,may01bpm];

	//Creating the output arrray object
	for(i=0;i<bpm.length;i++){
		let min = Math.min(...bpm[i]);
		let max = Math.max(...bpm[i]);
		let med = bpm[i].sort(function(a,b){return a-b});
		let median =  (med[med.length/2]+med[(med.length/2)+1])/2;
		let TS = dates[i][dates[i].length-1]["timestamps"]["endTime"];
		let date = dates[i][0]["timestamps"]["startTime"].split('T')[0];
		finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":TS});
	}
	
	//Writing the output data in Json format
	jsonData = JSON.stringify(finalObject,null,4);
	fs.writeFile('output.json',jsonData,'utf-8',function(err){
		if(err) throw err;
	})
	

})




