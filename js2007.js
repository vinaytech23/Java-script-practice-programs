// var list = document.querySelector('.output ul');
// var totalBox = document.querySelector('.output p');
var total = 0;
// list.innerHTML = '';
// totalBox.textContent = '';
// number 1
              var products = ['Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];

for (var i = 0; i <= products.length; i++) { // number 2
  // number 3
  var proPri = products[i].split(":");
  // console.log(proPri);
  // number 4
  var proPrice = Number(proPri[1]);
  // console.log(proPrice);
  
  // number 5
  // itemText = 0;
  total += proPrice;
  console.log(total);
  // var listItem = document.createElement('li');
  // listItem.textContent = itemText;
  // list.appendChild(listItem);
}
console.log(total);
  
// totalBox.textContent = 'Total: $' + total.toFixed(2);