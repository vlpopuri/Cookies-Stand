'use strict';
/* I have cookie franchises all over Seattle. 
Each stores bakes and makes sales from (6 am to 8 pm = 14 hours). 
Minimum number of customers per hour.
Maximum number of customers per hour.
The average number of cookies purchased by customer.
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var  pikeMarket = {
  min_customers: 23,
  max_customers: 65,
  avg_cookie_sale: 6.3,
  total_sales_per_hour:[]
}

 pikeMarket.render_cookies = function () {

  console.log('i like cookies');
 for(var i= 0; i < 14  ; i ++){

  var render_cookies = getRandomIntInclusive(23, 65);
  this.total_sales_per_hour.push(render_cookies);
  
  console.log(render_cookies, 'need to know  total cookies sale'+ this.total_sales_per_hour);
  
 }

}
 pikeMarket.makelist = function (){
 var pikeMarket_ul = document.getElementById('pikeMarket');
 var title_li = document.createElement('li');
 title_li.textContent = 'pikeMarket';
 pikeMarket_ul.appendChild(title_li);

 for (var i = 0; i < 14 ; i++) {
  var new_li = document.createElement('li');
  var new_li = 14[i];
  new_li.textContent = `6 am ${i + 1} Cookies: ${render_cookies}`;

  // new_li.textContent = `Fight ${i + 1} damage: ${this.battle_damage_array[i]}`;
  //Template literal: uses a ` instead of a ' or "
  // `${//any javascript} `

  pikeMarket_ul.appendChild(new_li);
 } 
};

pikeMarket.render_cookies();


