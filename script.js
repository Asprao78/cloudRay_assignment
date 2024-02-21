
const fs = require("node:fs");

//Read the input json file
fs.readFile("heartRateDataGen_May2023.json", function (err, data) {
    // body...
    if (err) throw err;

    //Declare the array object variables

    let finalObject = [];
    let hourcount = 24;
    let may2023 = [];
    let may2023bpm = [];
    let mayDates = [];
    let jsonData = null;
    

    //Parse the json data to an array object using the JSON Parse function
    const hr = JSON.parse(data);    
        
        date = hr[0]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-01'){
            for(x=0;x<hourcount;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[hourcount-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[24]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-02'){
            for(x=hourcount;x<hourcount*2;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*2)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[48]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-03'){
            for(x=hourcount*2;x<hourcount*3;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*3)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[72]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-04'){
            for(x=hourcount*3;x<hourcount*4;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*4)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[96]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-05'){
            for(x=hourcount*4;x<hourcount*5;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*5)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[120]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-06'){
            for(x=hourcount*5;x<hourcount*6;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*6)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[144]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-07'){
            for(x=hourcount*6;x<hourcount*7;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*7)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[168]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-08'){
            for(x=hourcount*7;x<hourcount*8;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*8)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[192]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-09'){
            for(x=hourcount*8;x<hourcount*9;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*9)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[216]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-10'){
            for(x=hourcount*9;x<hourcount*10;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*10)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[240]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-11'){
            for(x=hourcount*10;x<hourcount*11;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*11)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[264]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-12'){
            for(x=hourcount*11;x<hourcount*12;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*12)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[288]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-13'){
            for(x=hourcount*12;x<hourcount*13;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*13)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[312]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-14'){
            for(x=hourcount*13;x<hourcount*14;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*14)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[336]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-15'){
            for(x=hourcount*14;x<hourcount*15;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*15)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[360]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-16'){
            for(x=hourcount*15;x<hourcount*16;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*16)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[384]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-17'){
            for(x=hourcount*16;x<hourcount*17;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*17)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[408]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-18'){
            for(x=hourcount*17;x<hourcount*18;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*18)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[432]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-19'){
            for(x=hourcount*18;x<hourcount*19;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*19)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[456]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-20'){
            for(x=hourcount*19;x<hourcount*20;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*20)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[480]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-21'){
            for(x=hourcount*20;x<hourcount*21;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*21)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[504]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-22'){
            for(x=hourcount*21;x<hourcount*22;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*22)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[528]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-23'){
            for(x=hourcount*22;x<hourcount*23;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*23)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[552]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-24'){
            for(x=hourcount*23;x<hourcount*24;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*24)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        
        date = hr[576]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-25'){
            for(x=hourcount*24;x<hourcount*25;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*25)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[600]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-26'){
            for(x=hourcount*25;x<hourcount*26;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*26)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[624]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-27'){
            for(x=hourcount*26;x<hourcount*27;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*27)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[648]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-28'){
            for(x=hourcount*27;x<hourcount*28;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*28)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[672]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-29'){
            for(x=hourcount*28;x<hourcount*29;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*29)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[696]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-30'){
            for(x=hourcount*29;x<hourcount*30;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*30)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }

        date = hr[720]["timestamps"]["startTime"].split('T')[0];
        if(date=='2023-05-31'){
            for(x=hourcount*30;x<hourcount*31;x++){
                may2023bpm.push(hr[x]["beatsPerMinute"]);
            }
            let min = Math.min(...may2023bpm);
            let max = Math.max(...may2023bpm);
            let med = may2023bpm.sort(function(a,b){return a-b});
            let median = (med[med.length/2]+med[(med.length/2)+1])/2;
            let ts = hr[(hourcount*31)-1]["timestamps"]["endTime"];
            finalObject.push({"date":date,"min":min,"max":max,"median":median,"latestDataTimeStamp":ts});
            may2023bpm = [];
        }




    //Writing the output data in Json format
    jsonData = JSON.stringify(finalObject,null,2);
    fs.writeFile('output_may2023.json',jsonData,'utf-8',function(err){
    	if(err) throw err;
    })
    console.log("Heart Rate statistics calculated and saved to ".concat('output_may2023.json'));


})




