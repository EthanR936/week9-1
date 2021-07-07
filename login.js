function checkCreds (){ //function check creds
    console.log("checkCreds() function started"); //checks if funtion above is working in console
    var firstName = document.getElementById("fName").value; // makes varable or var for first name
    var lastName = document.getElementById("lName").value;//  makes var for last name 
    var badgeNumb = document.getElementById("badgeID").value;// makes var badge id dont know what get elemnt by id does still 
    var fullName = firstName + " " + lastName; //varable for full name combining first and last

    console.log("Full nam is: " + fullName + ", and the Badge ID is:"+ badgeNumb); //put statment in console to check if it is working

    if(fullName.length > 20 || fullName.length < 2){ //if the length of full name is greater than 20 or less that 2 it is invalid 
        document.getElementById("loginStatus").innerHTML = "invalid Full name! please try again"
    }else if (badgeNumb > 999 || badgeNumb < -999){ //if the number is greater than 999 or less than -999 it is invalid
        document.getElementById("loginStatus").innerHTML = "invalid badge number, please re enter"
    }else {
        alert("Access granted, welcome " + fullName); //if it is none of the anove statements then send alert pop up that says access granter full name
        location.replace("uatspacepage.html");// also when none of the above statments are met switch location to uat space page
    }
}