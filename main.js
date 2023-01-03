
const favs = Array.from (document.getElementsByClassName ('fa-heart'));

var btn_min_bag = document.getElementById("min-bag");
var btn_max_bag = document.getElementById("max-bag");
var first_quantity = document.getElementById("first_quantity");
var remove_first = document.querySelectorAll(".btn")[0];
var first_total = document.querySelectorAll("#spans")[0];
var first_price = document.getElementById("first_price");

var btn_min_shoes = document.querySelector("#min-shoes");
var btn_max_shoes = document.querySelector("#max-shoes");
var second_quantity = document.querySelector("#second_quantity");
var remove_second = document.querySelectorAll(".btn")[1];
var second_total = document.querySelectorAll("#spans")[1];
var second_price = document.querySelector("#second_price");

var btn_min_clock = document.querySelector("#min-clock");
var btn_max_clock = document.querySelector("#max-clock");
var third_quantity = document.querySelector("#third_quantity");
var remove_third = document.querySelectorAll(".btn")[2];
var third_total = document.querySelectorAll("#spans")[2];
var third_price = document.querySelector("#third_price");

var subtotal = document.getElementById("total_sub");

for (let el of favs){
  el.addEventListener('click', function(){
if (el.style.color !='red') {
  el.style.color = 'red'
}else {
  el.style.color='black'
}






  })
}




btn_max_bag.addEventListener("click", function (event) {
  first_quantity.textContent++;

  totalPrice();
});

btn_min_bag.addEventListener("click", function (event) {
  if (first_quantity.innerHTML > 0) {
    first_quantity.textContent--;
  }
  totalPrice();
});

remove_first.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  first_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});



btn_max_shoes.addEventListener("click", function (event) {
  second_quantity.textContent++;
  totalPrice();
});

btn_min_shoes.addEventListener("click", function (event) {
  if (second_quantity.innerHTML > 0) {
    second_quantity.textContent--;
  }
  totalPrice();
});
remove_second.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  second_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});






btn_max_clock.addEventListener("click", function (event) {
  third_quantity.textContent++;
  totalPrice();
});

btn_min_clock.addEventListener("click", function (event) {
  if (third_quantity.innerHTML > 0) {
    third_quantity.textContent--;
  }

  totalPrice();
});



remove_third.addEventListener("click", function (event) {
  var buttonClicked = event.target;
  third_quantity.innerText = 0;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  totalPrice();
});




function totalPrice() {
  var sPrice = parseFloat(second_price.innerText.replace("$", ""));
  var sQuantity = second_quantity.innerText;
  var bPrice = parseFloat(first_price.innerText.replace("$", ""));
  var bQuantity = first_quantity.innerText;
  var cPrice = parseFloat(third_price.innerText.replace("$", ""));
  var cQuantity = third_quantity.innerText;
  var totals = 0;

  Math.round(bPrice * bQuantity * 100) / 100;
  first_total.innerText = Math.round(bPrice * bQuantity * 100) / 100;
  second_total.innerText = Math.round(sPrice * sQuantity * 100) / 100;
  third_total.innerText = Math.round(cPrice * cQuantity * 100) / 100;
  totals = totals + sPrice * sQuantity + bPrice * bQuantity + cPrice * cQuantity;
  subtotal.innerText = "$" + Math.round(totals * 100) / 100;

}
