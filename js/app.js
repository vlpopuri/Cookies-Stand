'use strict';
/* I have cookie franchises all over Seattle.
Each stores bakes and makes sales from (6 am to 8 pm = 14 hours).
Minimum number of customers per hour.
Maximum number of customers per hour.
The average number of cookies purchased by customer.
*/
//This function calculates a random number
//Copied from MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var total_number_of_hours = 14;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
//global variables
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm','7pm'];


//creating construction function for all the stores

var StoreConstructor = function (name, min_customers, max_customers, avg_cookie_sale) {

  this.name = name;
  this.min_customers = min_customers;
  this.max_customers = max_customers;
  this.avg_cookie_sale = avg_cookie_sale;
  this.total_sales_per_hour = [];
};

//pikeMarket.calculateSales = function(location) {
StoreConstructor.prototype.calculateSales = function() {

  // console.log('i like cookies');
  //debugger;
  for(var i= 0 ; i < total_number_of_hours ; i ++){

    var randomCustomersPerHour = getRandomIntInclusive(this.min_customers, this.max_customers);
    var randomSalesPerHour = Math.floor(randomCustomersPerHour * this.avg_cookie_sale);
    this.total_sales_per_hour.push(randomSalesPerHour);


  }
  console.log('Number of Cust last hour: ' + randomCustomersPerHour);
  console.log('Sales last hour: ' + randomSalesPerHour);
  console.log(this.total_sales_per_hour);

};

var storesArray = [];
//Initialize Page
var pike = new StoreConstructor('Pike Market', 23, 65, 6.3);
storesArray.push(pike);
// pike.listEverything();


var seatacAirport = new StoreConstructor('SeaTac Airport', 3, 24, 1.2);
storesArray.push(seatacAirport);
// seatacAirport.listEverything();

var seattleCenter = new StoreConstructor('Seattle Center', 11, 38, 3.7);
storesArray.push(seattleCenter);
// seattleCenter.listEverything();

var capitolHill = new StoreConstructor('Capitol Hill', 20, 38, 2.3);
storesArray.push(capitolHill);
// capHill.listEverything();

var alki = new StoreConstructor('Alki', 23, 65, 6.3);
storesArray.push(alki);
// alki.listEverything();



//create a list of pikeMarket store with cookies

function renderEstSalesToPage(location) {
  // put store sales on page
  // console.log ('going on the page');


  var pikeMarket_ul = document.getElementById(location.name);
  var title_li = document.createElement('li');
  title_li.textContent = location.name;
  pikeMarket_ul.appendChild(title_li);

  // console.log('I am running to test' );

  for (var i = 0; i < total_number_of_hours ; i++) {
    var new_li = document.createElement('li');
    var randomCustomersPerHour = getRandomIntInclusive(location.min_customers, location.max_customers);
    new_li.textContent = `${hours[i]} Cookies: ${randomCustomersPerHour}`;
    pikeMarket_ul.appendChild(new_li);
  }

}

//find hourly total for all stores

StoreConstructor.prototype.totalSales = function(){
  var totalCookies = 0;
  for(var j = 0; j < this.total_sales_per_hour.length; j++){
    totalCookies = totalCookies + this.total_sales_per_hour[j];
  }
  return totalCookies;
};

//References a table element ("parent")
var tableEl = document.getElementById('cookie-stores-table');

//Header follows different format compared to the rest of the table
//This function will render the header
function build_Header() {
  var header_tr = document.createElement('tr');
  var blankSpace = document.createElement('th');
  blankSpace.textContent = 'location'; //optional
  header_tr.appendChild(blankSpace);

  for(var l = 0; l < hours.length; l++){
    var nextHeader_td = document.createElement('th');
    nextHeader_td.textContent = hours[l];
    header_tr.appendChild(nextHeader_td);
  }
  var total_td = document.createElement('th');
  total_td.textContent = 'Daily Location Total';
  header_tr.appendChild(total_td);
  tableEl.appendChild(header_tr);
}


//This method will add data ('td') to the rows ('tr')
StoreConstructor.prototype.addData = function(next_tr, location, totalSales) {
  //debugger;
  var title_td = document.createElement('td');
  title_td.textContent = location;
  next_tr.appendChild(title_td);

  for(var m = 0; m < this.total_sales_per_hour.length; m++){
    var next_td = document.createElement('td');
    next_td.textContent = this.total_sales_per_hour[m];
    next_tr.appendChild(next_td);
  }

  var sumCookies = document.createElement('td');
  sumCookies.textContent = totalSales;
  next_tr.appendChild(sumCookies);
};

// //This method will add rows ('tr') to the table ('salesTable') and render the information
StoreConstructor.prototype.addRow = function() {

  var location = this.name;
  var sumCookies = this.totalSales();
  var next_tr = document.createElement('tr');
  this.addData(next_tr, location, sumCookies);
  tableEl.appendChild(next_tr);
};

//This function will calculate the hourly total betwwen all stores
// parseInt('5')=== 5
//parseInt() === untringy the int;
// parseInt means convert a string into an interger
var hourlyTotalArray = [];
function totalPerHourSum() {
  var sum = 0;

  for (var n = 0; n < storesArray.length; n++) { // every hour

    // for (var i = 0; i < storesArray[n][4].length; i++) { // add all the totals
    //   sum = sum + storesArray[n][4][i];
    // }
    storesArray[n].calculateSales();

    hourlyTotalArray.push(sum);
  }

}
console.log(storesArray);

//make footer

//Footer follows different format compared to the rest of the table
//This function will render the footer
totalPerHourSum();

//var dailyTotal = pike.totalSales() + seatacAirport.totalSales() + seattleCenter.totalSales() + capitolHill.totalSales() + alki.totalSales();
var dailyTotal=0;
for (var i=0; i <storesArray.length; i++)
{
  dailyTotal= dailyTotal + storesArray[i].totalS;

}

var footer_tr = document.createElement('tr');
var footer_td = document.createElement('td');
footer_td.textContent = 'Total';
footer_td.id= 'hourlyTotalsForAllLocations';
footer_tr.appendChild(footer_td);

function salesColumnsTotals(locations, time) {

  var sum = 0;
  for(var locationPos = 0; locationPos < locations.length; locationPos++){
    sum += storesArray[locationPos].total_sales_per_hour[time];
  }
  var dailyTotal_td = document.createElement('td');
  dailyTotal_td.textContent = sum;
  footer_tr.appendChild(dailyTotal_td);
  tableEl.appendChild(footer_tr);
  //console.log(sum);
  return sum;
}

function runColumnTotals(){

  var total_sales_all = 0;
  for(var hour = 0; hour < hours.length; hour++ ){

    total_sales_all += salesColumnsTotals(storesArray,hour);
  }
  // var getLastColumnTableElement = document.getElementById('hourlyTotalsForAllLocations');
  console.log('Test',total_sales_all);
  var dailyTotal_td = document.createElement('td');
  dailyTotal_td.textContent = total_sales_all;
  footer_tr.appendChild(dailyTotal_td);
  tableEl.appendChild(footer_tr);
}


//Build Table
function totalPerHour(){
  build_Header(); // builds the header
  //use the array to render each store
  for(var i = 0; i < storesArray.length; i++){
    // debugger;
    storesArray[i].addRow();
  }
  // buildFooter();
}

function salesColumnsTotalsNewstore(locations, time) {

  var sum = 0;
  for(var locationPos = 0; locationPos < locations.length; locationPos++){
    sum += storesArray[locationPos].total_sales_per_hour[time];
  }
  var dailyTotal_td = document.createElement('td');
  dailyTotal_td.textContent = sum;
  //footer_tr.appendChild(dailyTotal_td);
  tableEl.appendChild(footer_tr);
  //console.log(sum);
  return sum;
}

function totalPerHourSumNewStore(newStoreArray)
{
  var sum = 0;

  for (var n = 0; n < newStoreArray.length; n++) { // every hour
  
    // for (var i = 0; i < storesArray[n][4].length; i++) { // add all the totals
    //   sum = sum + storesArray[n][4][i];
    // }
    newStoreArray[n].calculateSales();
    hourlyTotalArray.push(sum);

  }
}
function totalPerHourNewStore(newstore_array){
   //build_Header(); // builds the header
  //use the array to render each store
  for(var i = 0; i < newstore_array.length; i++){
    // debugger;
    newstore_array[i].addRow();
  }
  // buildFooter();
}


  
function runColumnTotalsNewStore(newstoreArray)
{
  var total_sales_all = 0;
  hour=[];
  for(var hour = 0; hour < hours.length; hour++ ){
  
    total_sales_all += salesColumnsTotalsNewstore(newstoreArray,hour);
  }
  // var getLastColumnTableElement = document.getElementById('hourlyTotalsForAllLocations');
  console.log('Test',total_sales_all);
  //var dailyTotal_td = document.createElement('td');
 // dailyTotal_td.textContent = total_sales_all;
  //footer_tr.appendChild(dailyTotal_td);
  //tableEl.appendChild(footer_tr);



}

totalPerHour();
runColumnTotals();


// =======================================================
// Forms stuff
// =======================================================

// 1. We need to reference the form in the javascript
var storeForm = document.getElementById('cookie-stores-form');
//2. Event Handler (function that will be called when the form submits)
function handleMakeNewStore(event){

  event.preventDefault();

  var store= document.getElementById('store').value;
  var maxcust= document.getElementById('maxc').value;
  var mincust= document.getElementById('minc').value;
  var avgcookies= document.getElementById('avgc').value;
  //location.reload(true);
  // collect data, then make a new cookie store with it
  var newstore = new StoreConstructor( store,mincust,maxcust,avgcookies);
  var newlyaddedStore=[];// storesArray.slice(0);
  newlyaddedStore.push (newstore);
  console.log (newstore);
  //location.reload(true);
  //storesArray=[];
  console.log(storesArray);
  console.log (newstore);
  
  
  // var tbl = document.getElementById('cookie-stores-table');
  // if(tbl) tbl.innerHTML='';
  //hourlyTotalArray=[];

  totalPerHourSumNewStore(newlyaddedStore);
  totalPerHourNewStore(newlyaddedStore);
  runColumnTotalsNewStore(newlyaddedStore);

  //clear storesArray and all the input textboxes after clicking the addstore button.
  //storesArray=[];
  document.getElementById('store').value='';
  document.getElementById('maxc').value='';
  document.getElementById('minc').value='';
  document.getElementById('avgc').value='';

}

//3. connect the event handler function to the form
storeForm.addEventListener('submit', handleMakeNewStore);







