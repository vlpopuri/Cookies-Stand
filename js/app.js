'use strict';
/* I have cookie franchises all over Seattle.
Each stores bakes and makes sales from (6 am to 8 pm = 14 hours).
Minimum number of customers per hour.
Maximum number of customers per hour.
The average number of cookies purchased by customer.
*/
var total_number_of_hours = 14;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// var StoreConstructor=function store(name, min_customers, max_customers, avg_cookie_sale, total_sales_per_hour) {

//   this.name = name;
//   this.min_customers = min_customers;
//   this.max_customers = max_customers;
//   this.avg_cookie_sale = avg_cookie_sale;
//   this.total_sales_per_hour = total_sales_per_hour;
// }

// var PikeStore= new StoreConstructor('pikeMarket',23,65,6.3,

var pikeMarket = {
  name: 'pikeMarket',
  min_customers: 23,
  max_customers: 65,
  avg_cookie_sale: 6.3,
  total_sales_per_hour:[]
};

// pikeMarket.calculateSales = function (SeaTacAirport, SeattleCenter, CapitalHill, Alki) {

//   console.log('i like cookies');
//   //debugger;
//   for(var i= 0 ; i < total_number_of_hours ; i ++){

//     var randomCustomersPerHour = getRandomIntInclusive(this.min_customers, this.max_customers);
//     var randomSalesPerHour = randomCustomersPerHour * this.avg_cookie_sale;
//     this.total_sales_per_hour.push(randomCustomersPerHour);


//   }
//   console.log('Number of Cust last hour: ' + randomCustomersPerHour);
//   console.log('Sales last hour: ' + randomSalesPerHour);
//   console.log(this.total_sales_per_hour);

// };

var seaTacAirport = {
  name: 'seaTacAirport',
  min_customers: 3,
  max_customers: 24,
  avg_cookie_sale: 1.2,
  total_sales_per_hour:[]
};

var seattleCenter = {
  name: 'seattleCenter',
  min_customers: 11,
  max_customers: 38,
  avg_cookie_sale: 3.7,
  total_sales_per_hour:[]
};

var capitolHill = {
  name: 'capitolHill',
  min_customers: 20,
  max_customers: 38,
  avg_cookie_sale: 2.3,
  total_sales_per_hour:[]
};

var alki = {
  name: 'alki',
  min_customers: 2,
  max_customers: 16,
  avg_cookie_sale: 4.6,
  total_sales_per_hour:[]
};





pikeMarket.calculateSales = function(location) {

  console.log('i like cookies');
  //debugger;
  for(var i= 0 ; i < total_number_of_hours ; i ++){

    var randomCustomersPerHour = getRandomIntInclusive(location.min_customers, location.max_customers);
    var randomSalesPerHour = randomCustomersPerHour * location.avg_cookie_sale;
    location.total_sales_per_hour.push(randomCustomersPerHour);


  }
  console.log('Number of Cust last hour: ' + randomCustomersPerHour);
  console.log('Sales last hour: ' + randomSalesPerHour);
  console.log(location.total_sales_per_hour);

};

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
    new_li.textContent = `6 am ${i + 1} Cookies: ${randomCustomersPerHour}`;

    // new_li.textContent = `Fight ${i + 1} damage: ${this.battle_damage_array[i]}`;
    //Template literal: uses a ` instead of a ' or "
    // `${//any javascript} `

    pikeMarket_ul.appendChild(new_li);
  }

}


renderEstSalesToPage(pikeMarket);
pikeMarket.calculateSales(pikeMarket);
renderEstSalesToPage(seaTacAirport);
pikeMarket.calculateSales(seaTacAirport);
renderEstSalesToPage(seattleCenter);
pikeMarket.calculateSales(seattleCenter);
renderEstSalesToPage(capitolHill);
pikeMarket.calculateSales(capitolHill);
renderEstSalesToPage(alki);
pikeMarket.calculateSales(alki);


