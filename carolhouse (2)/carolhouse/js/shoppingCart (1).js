document.addEventListener('DOMContentLoaded', function() {
/*delete items from product list*/
var removeFromCart = document.getElementsByClassName('delete');

for (var i = 0; i < removeFromCart.length; i++) {
  var button = removeFromCart[i];
  button.addEventListener('click', function(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.parentElement.remove();
    updateCartTotal();
  });
}

/*Function for calculating total price and total number of product */
function updateCartTotal() {
    var cartItemHolder = document.getElementsByClassName('All_Items')[0];
    var cartRows = cartItemHolder.getElementsByClassName('Item');
    var total = 0;
    var totalMoney = 0;
    var shippingFee = parseFloat(document.getElementsByClassName('Shipping_Fee')[0].innerText.replace('$',''));
/*total number of product */
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var quantity = cartRow.getElementsByClassName('Item_Num')[0];
        var quantityValue = parseInt(quantity.value);
        total += quantityValue;
    }
/*total price of product */
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var price = cartRow.getElementsByClassName('price')[0];
        var quantity = cartRow.getElementsByClassName('Item_Num')[0];
        var priceProduct = parseFloat(price.innerText.replace('$', ''));
        var quantityProduct = quantity.value;
        totalMoney += priceProduct * quantityProduct;
    }

    var totalSub = document.getElementsByClassName('Total_Sub')[0];
    var totalPrice = document.getElementsByClassName('Total_Price')[0];

    totalSub.innerText = '$' + totalMoney;
    totalPrice.innerText = '$' + (totalMoney + shippingFee);
    document.getElementsByClassName('Num_Product')[0].innerText = total + ' products';

    // Check if subtotal is 0, if it's 0 total will be 0
    if (totalMoney === 0) {
        totalPrice.innerText = '$0';
    }
}

/* plus and minus button */
var plusButtons = document.querySelectorAll('.Add');
var minusButtons = document.querySelectorAll('.Minus');

/*make plus sign work */
for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener('click', function() {
    var quantityInput = this.parentElement.querySelector('.Item_Num');
    var currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
    updateCartTotal();
  });
}

/*make minus sign work */
for (var i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener('click', function() {
    var quantityInput = this.parentElement.querySelector('.Item_Num');
    var currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
      updateCartTotal();
    }
  });
}

/* add event listener*/
var quantityInputs = document.getElementsByClassName('Item_Num');
for (var i = 0; i < quantityInputs.length; i++) {
  var input = quantityInputs[i];
  input.addEventListener('change', updateCartTotal);
}

/* Update the function */
updateCartTotal();


var checkedButton = document.querySelectorAll('.checkedButton')
for (let i = 0; i < checkedButton.length; i++) {
    checkedButton[i].addEventListener('click',function(){
        if(this.getAttribute('selected')=='true'){
            this.style.backgroundImage = "url(img/selected.png)"
            this.setAttribute('selected','false')    
        }else{
            this.style.backgroundImage = "url(img/checkbox.png)"
            this.setAttribute('selected','true')
        }
    })
}


var drop = document.querySelectorAll('.left-type-top')
var ul = document.querySelectorAll('.left-type ul')
for (let i = 0; i < drop.length; i++) {
    drop[i].addEventListener('click',function(){
        if(this.getAttribute('selected')=='true'){
            this.children[0].style.transform = 'rotate(-90deg)'
            this.setAttribute('selected','false')
            ul[this.getAttribute('index')].style.display = 'none'
        }else{
            this.children[0].style.transform = 'rotate(0deg)'
            this.setAttribute('selected','true')
            ul[this.getAttribute('index')].style.display = 'block'
        }
    })
}

var pay_show = document.querySelectorAll('.pay-show ul li')
var selected_pay = document.querySelector('.selected-pay')
for (let i = 0; i < pay_show.length; i++) {
    pay_show[i].addEventListener('click',function(){
        selected_pay.style.top = parseInt(this.getAttribute('index'))*110 + 40 + '%'
    })
    
}
});
