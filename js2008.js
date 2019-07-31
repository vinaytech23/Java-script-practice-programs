var myArray = new Array('a', 'b', 'c', 'd', 'e');
myArray = myArray.slice(1, 4); 
console.log(myArray);
// starts at index 1 and extracts all elements
                               // until index 3, returning [ "b", "c", "d"]


var myArray1 = new Array('1', '2', '3', '4', '5');
myArray.splice(1, 3, 'a', 'b', 'c', 'd');
console.log(myArray1); 
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was), 
// removed 3 elements there, and then inserted all consecutive
// elements in its place.


var myArray2 = new Array('1', '2', '3');
console.log(myArray.reverse()); 
// transposes the array so that myArray = ["3", "2", "1"]


var myArray3 = new Array('Wind', 'Rain', 'Fire');
console.log(myArray.sort()); 
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]

var myArray4 = new Array('apple',"anger","ant","ape","apply","abonden", "Bus", "Beer");
console.log(myArray4.sort());