var str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(0, -22),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str1.length);
console.log(str2 + "  : "+ str2.length); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); 