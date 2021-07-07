class Mission{
    //states first
    constructor(
        fuelLevel,
        oxygenLevel,
        foodLevel,
        spaceCraft,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        nomOfAstronauts
    ) {    //sustaniate states
        this.fuelLevel = fuelLevel;
        this.oxygenLevel = oxygenLevel;
        this.foodLevel = foodLevel;
        this.spaceCraft =spaceCraft;
        this.launchDayDate = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.nomOfAstronauts = nomOfAstronauts;

    }
    //list methods
    launch(){
        //code for launch goes here
        alert(" we are taking off")
    }

    disMissionLaunchDate(){
        alert("this mission launches on "+ this.launchDateMonth + " " + this.launchDateDay + ", " + this.launchDateYear);
    }
}


function displayFall(){
    console.log("DisplayFall() running");
    fallLaunch.disMissionLaunchDate();
}