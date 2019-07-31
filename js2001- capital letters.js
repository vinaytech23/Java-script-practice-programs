var cities = ["hyderabd", "warangal", "aMeerpet", "ram Nagar"];
 

 var NewCap = [];
 for(var i=0; i < cities.length; i++)
 {
  firstL = cities[i].slice(0,1).toUpperCase();
  remainW = cities[i].slice(1).toLowerCase();
  NewCap [i] = firstL + remainW;
  console.log(NewCap[i]);
 }