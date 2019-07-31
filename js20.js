// document.querySelector('p').addEventListener('click',updateName);
// function updateName () {
// 	var name = prompt("enter the name");
// 	document.querySelector('p').textContent = " Pleayer 1: " + name;
// }



// document.getElementById('changeclr').addEventListener('click',function  () {
// 	var col = prompt ('enter the color');
// 	document.querySelector('body').style.backgroundColor = col;

// });

// var p1 = document.getElementsByClassName('parent1');
// var b1 =  document.getElementsByClassName('hideme');
// b1.addEventListener('click',function () {
// 	.getElementsByClassName('ar1').style.display = 'none';

// })
document.getElementById('hideme').addEventListener('click', function () {
	document.getElementById('ar1').style.display = 'none';
	document.getElementById('para1').style.display = 'none';
});
document.getElementById('para2').addEventListener('click',function () {
	document.getElementById('ar1').style.display = 'block';
	document.getElementById('para1').style.display = 'block';
	document.getElementById('para1').textContent = "Hi I am now changed";
	document.getElementById('hideme').textContent = " I am also changed";
})

// document.getElementsByClassName('hideme').addEventListener('click', function () {
// 	document.getElementsByClassName('article1').style.display = 'none';
// 	// .style.display = "none";
// });

// document.querySelector('p').addEventListener('click', function () {
// 	document.querySelector('div').style.display = "block";
// 	document.querySelector('div').textContent = "lorem	eihs you happy birthday";

// 	});


// document.getElementsByClassName('missMe').addEventListener('click', function () {
// 	document.getElementsByClassName('newDiv').style.display = 'none';

// });

// document.getElementById('changeMe').style.display = 'none';