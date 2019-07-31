/*function car () {
	
	var car_brand;
	var car_model;
	var car_price;
	car_brand= prompt("enter car brand");
	car_model= prompt("enter car model");
	car_price= prompt("enter car price");
	
	alert(car_brand);

}
car();
*/
function cars (car_brand,car_model,car_price) {
	this.car_brand=brand;
	 this.car_model=model;
	 this.car_price=price;
	 this.printme =function()
	 {
	 	document.writeln(car_brand+ car_model + car_price);	 
	 }
}

var c1= new cars("pulsar","220",150000);
c1.printme();