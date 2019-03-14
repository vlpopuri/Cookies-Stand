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
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//creating construction function for all the stores

var StoreConstructor=function store(name, min_customers, max_customers, avg_cookie_sale) {

  this.name = name;
  this.min_customers = min_customers;
  this.max_customers = max_customers;
  this.avg_cookie_sale = avg_cookie_sale;
  this.total_sales_per_hour = [];
};

//pikeMarket.calculateSales = function(location) {
StoreConstructor.prototype.calculateSales = function() {

  console.log('i like cookies');
  //debugger;
  for(var i= 0 ; i < total_number_of_hours ; i ++){

    var randomCustomersPerHour = getRandomIntInclusive(this.min_customers, this.max_customers);
    var randomSalesPerHour = randomCustomersPerHour * this.avg_cookie_sale;
    this.total_sales_per_hour.push(randomCustomersPerHour);


  }
  console.log('Number of Cust last hour: ' + randomCustomersPerHour);
  console.log('Sales last hour: ' + randomSalesPerHour);
  console.log(this.total_sales_per_hour);

};



var pikeMarketl= new StoreConstructor('pikeMarket',23,65,6.3);
var seaTacAirport= new StoreConstructor('seaTacAirport',3,24,1.2);
var seattleCenter= new StoreConstructor('seattleCenter',11, 38, 3.7);
var capitolHill= new StoreConstructor('capitolHill',20, 38, 2.3);
var alki= new StoreConstructor('alki',2, 16, 4.6);



//create a list of pikeMarket store with cookies

function renderEstSalesToPage(location) {
  // put store sales on page
  console.log ('going on the page');


  var pikeMarket_ul = document.getElementById(location.name);
  var title_li = document.createElement('li');
  title_li.textContent = location.name;
  pikeMarket_ul.appendChild(title_li);

  console.log('I am running to test' );

  for (var i = 0; i < total_number_of_hours ; i++) {
    var new_li = document.createElement('li');
    var randomCustomersPerHour = getRandomIntInclusive(location.min_customers, location.max_customers);

    new_li.textContent = `${hours[i]} Cookies: ${randomCustomersPerHour}`;


    pikeMarket_ul.appendChild(new_li);
  }

}

//find hourly total for all stores

//References a table element ("parent")
var tableEl = document.getElementById('salesTable');

//Header follows different format compared to the rest of the table
//This function will render the header
function build_Header() {
  var header_tr = document.createElement('tr');
  var blankSpace = document.createElement('td');
  // blankSpace.textContent = ''; //optional
  header_tr.appendChild(blankSpace);

  for(var l = 0; l < this.total_sales_per_hour.length; l++){
    var nextHeader_td = document.createElement('td');
    nextHeader_td.textContent = this.total_sales_per_hour[l];
    header_tr.appendChild(nextHeader_td);
  }
  var total_td = document.createElement('td');
  total_td.textContent = 'Daily Location Total';
  header_tr.appendChild(total_td);
  tableEl.appendChild(header_tr);
}


//This method will add data ('td') to the rows ('tr')
StoreConstructor.prototype.addData = function(next_tr, location, totalSales) {
  var title_td = document.createElement('td');
  title_td.textContent = location;
  next_tr.appendChild(title_td);

  for(var m = 0; m < this.total_sales_per_hour.length; m++){
    var next_td = document.createElement('td');
    next_td.textContent = this.avgSalesPerHour[m];
    next_tr.appendChild(next_td);
  }

  var sumCookies = document.createElement('td');
  sumCookies.textContent = totalSales;
  next_tr.appendChild(sumCookies);
};

// //This method will add rows ('tr') to the table ('salesTable') and render the information
StoreConstructor.prototype.addRow = function() {
  var location = this.location;
  var sumCookies = this.totalSales();
  var next_tr = document.createElement('tr');
  this.addData(next_tr, location, sumCookies);
  tableEl.appendChild(next_tr);
};

//This function will calculate the hourly total betwwen all stores
var hourlyTotalArray = [];
var storesArray = [];
function totalsales() {
  for (var n = 0; n < totalsales.length; n++) { // every hour
    var sum = 0;
    for (var i in storesArray) { // add all the totals
      sum = sum + storesArray[i].avgSalesPerHour[n];
    }


    hourlyTotalArray.push(sum);
  }
}

//make footer



renderEstSalesToPage(pikeMarket);
pikeMarket.calculateSales();
renderEstSalesToPage(seaTacAirport);
seaTacAirport.calculateSales();
renderEstSalesToPage(seattleCenter);
seattleCenter.calculateSales();
renderEstSalesToPage(capitolHill);
capitolHill.calculateSales();
renderEstSalesToPage(alki);
alki.calculateSales();


