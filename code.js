function start(){
    console.log("start function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){
    console.log("stop function started")
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg +=  value;
    msg += " "+ units;
    msg += "</td>"
    return msg;
}


function countdownTimer() { //nameing a funtion called countdowntimer
    console.log("countdownTimer working");
    var currTime = 50; //starting time for count down timer
    document.getElementById("countdownstatus").innerHTML = currTime; // I dont know unfortantly what this does
    currTime = currTime - 5; // subtract current time by 5
    
    //timer for 45
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 5000);

    //timer for 40
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 10000);
       
    //timer for 35
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 15000);

    //timer for 30
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 25000);

    //timer for 25
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 30000);

    //timer for 20
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 35000);

    //timer for 15
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 40000);

    //timer for 10
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 45000);

    //timer for 5
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = currTime;
        currTime = currTime - 5;
    }, 50000);

    //timer for 0
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownstatus").innerHTML = "blastoff!!!";
        currTime = currTime - 5;
    }, 55000);
    
}
//naming function for craps 
function playcraps(){ 
    console.log("craps log initied");
    var wins;
    var die1 = Math.ceil(Math.random() * 6); //81 and 82 are the same basically saying to go up to six using whole numbers
    var die2 = Math.ceil(Math.random() * 6);
    document.getElementById("die1Res").innerHTML = die1; // 83 and 84 are the results and I think they sent them to die 1 or die 2 results or the other way around 
    document.getElementById("die2Res").innerHTML = die2; 
    var diesum = die1 + die2; // saying sum up die1 and die2 numbers and send them to die sum to be displayed 
    document.getElementById("diecesum").innerHTML = diesum;
    if(diesum == 7 || diesum == 11){ // if you get a 7 or 11 you get the you lose text
        document.getElementById("crapstatus").innerHTML = "Craps You Lose!";
    }else if(die1 == die2 && die1 % 2 ==0 ){ //if you get even doubles you recive the you win text 
        document.getElementById("crapstatus").innerHTML = "Doubles You Win!!!";
        wins++;
    }else{
        document.getElementById("crapstatus").innerHTML = "You did not Lose and You did not Win"; //if did not get a double or a 7 or a 11 you recive this text
    }
    document.getElementById("winStatus").innerHTML = wins;
}
// adds a better countdown timer
function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");  //showing it's actully working
    var currTime = 50;
    for(var i = 0; i < 10; i++){ //if the varable is less than 5 add 1 and i =0 sets the starting value of the varible 
        setTimeout(function(){
            document.getElementById("countdownstatus").innerHTML = currTime;
            currTime = currTime - 5;
        },5000 * i);
        
    }
    setTimeout(function(){
        document.getElementById("countdownstatus").innerHTML = "blastoff!!";
    }, 50000);
}
function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");  //showing it's actully working
    var currTime = 50;
    for(var i = 0; i < 11; i++){ //if the varable is less than 5 add 1 and i =0 sets the starting value of the varible 
        if(i == 10){ //if i varable is 10 
            setTimeout(function(){  // when it reaches a certain  point un the countdown staus put blast off
                document.getElementById("countdownstatus").innerHTML = "Blastoff!!!"; 
                currTime = currTime - 5;
            },5000 * i);
        }else if (i > 4){ // I don't know exacly how this is done but I know when it reaches half way or 30 put warning 
            setTimeout(function(){
                document.getElementById("countdownstatus").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;
                currTime = currTime - 5;
        },5000 * i);
    }else{
        setTimeout(function(){ // if all the others dont apply just go down by 5 and nothing else
            document.getElementById("countdownstatus").innerHTML = currTime;
            currTime = currTime - 5;
        },5000 * i);
            
        }
        
        //setTimeout(function(){
            //document.getElementById("countdownstatus").innerHTML = currTime;
            //currTime = currTime - 5;
        //},5000 * i);
        
    }
}



function sandBoxRun(){
    console.log("SandBoxRun started"); //put sandbox started in console terminal
    var a = 7; //varable is 7
    if(a==5){ //if the varable is 5 149 says if it is 5 say varable eqaul 5 
        document.getElementById("sandboxArea").innerHTML = "a does in fact eqaul 5"; 

    }else{
        document.getElementById("sandboxArea").innerHTML = "a does NOT in fact eqaul 5"; //else if it dosent eqaul 5 say it dosn't eqaul 5
    }
}

function launchFall(){
    console.log("launchFall() running");
    fallLaunch.launch();
}

function playstation(){
    console.log("play space station sounds");
    mysound = new sound("us-lab-background.mp3");
    mysound.play();
}

function playBonk(){
    mysound = new sound("Bonk - Sound Effect (HD).mp3");
    mysound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause;
    }
}

class InputData{
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cesSensor_eCO2,
        cesSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magnetX,
        magnetY,
        magnetZ,
        gyroX,
        gyroY,
        gyroZ,

    ) {
        this.time_seconds = time_seconds
        this.latitude = latitude
        this.longitude = longitude
        this.gps_altitude = gps_altitude
        this.bmpSensor_altitude = bmpSensor_altitude
        this.bmpSensor_pressure = bmpSensor_pressure
        this.bmpSensor_temp = bmpSensor_temp
        this.digSensor_temp = digSensor_temp
        this.cssSensor_temp = cssSensor_temp
        this.cesSensor_eCO2 = cesSensor_eCO2
        this.cesSensor_TVOC = cesSensor_TVOC
        this.UV = UV
        this.accelX = accelX
        this.accelY = accelY
        this.accelZ = accelZ
        this.magnetX = magnetX
        this.magnetY = magnetY
        this.magnetZ = magnetZ
        this.gyroX = gyroX
        this.gyroY = gyroY
        this.gyroZ = gyroZ
    }
}