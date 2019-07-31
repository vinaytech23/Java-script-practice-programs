var News_str1 = "If India has increased its population of tigers to an estimated 2010";
console.log(News_str1);

var News_arr1 = News_str1.split(" ");//complete string will convert into individual array itmes
var News_arr2 = News_str1.split(" ",3);  // first 3 words of the string only become a array items 
console.log(News_arr1);
console.log(News_arr2);

let News_str2 = News_arr1.join(" "); //It becomes same as News_str1 now
console.log(News_str2);

let News_str3 = News_arr1.join(".");
console.log(News_str3);
console.log(News_str3.split("."));

console.log(News_arr1.join(", "));
let News_str4 = News_arr1.toString();
console.log(News_str4);
News_str4.replace(","," "));
