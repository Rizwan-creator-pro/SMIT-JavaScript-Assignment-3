// simple Alert
let simpleAlert = function () {
    alert("your Present Is The Past Of Your Future")
}
// Print by name
let printByName = function () {
    document.getElementById("output").innerHTML = "";
    
    let cityName = document.getElementById("input").value;
    if (!cityName) {
        alert("Please Enter the city name first...")
        return;
    }
    document.getElementById("output").innerHTML = cityName;
}
// Print all cities
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Burewala", "Sheikhupura", "Kashmir"]
function printAllCities() {
    document.getElementById("output").innerHTML = "";
    document.getElementById("input").value = "";
    for (index = 0; index < cities.length; index++){
        document.getElementById("output").innerHTML += index + 1 + ") " + cities[index] + "<br/>" ;
    }   
}
// Add cities in the list
function addCityInList() {
    document.getElementById("output").innerHTML = "";
    
    let city = document.getElementById("input").value;
    if (!city) {
        alert("Please Enter the city name first...")
        return;
    }
    cities.push(city)
    document.getElementById("output").innerHTML = '" <span style="color: green; text-transform: capitalize;">' + city + '</span> " is added in the list.';

}
// Generate table
function generateTable(){
        document.getElementById("output").innerHTML = "";
    let tableValue = document.getElementById("input").value;
    if (!tableValue) {
        alert("Please enter Some value to generate the table")
        return;
    } else {
        let tableLength = +prompt("Enter the length of the Table")
        for (let i = 0; i <= tableLength; i++) {
            document.getElementById("output").innerHTML += ''+ tableValue +' * '+ i +' = '+ tableValue * i +' <br/>'
        }
    }
    document.getElementById("input").value = ""
} 
// clear Input & Output
let clearInput = function () {
    document.getElementById("input").value = "";
}
let clearOutput = function () {
    document.getElementById("output").innerHTML = "";
}