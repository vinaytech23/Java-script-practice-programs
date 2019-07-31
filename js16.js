var markBMI = {
	firstName : 'Mark',
	lastName : 'philips',
	mass : 68,
	height : 1.65 ,
	Bmi : function () {
 	return this.bmi = this.mass / (this.height * this.height);

	}
}

var johnBMI = {
	firstName : 'John',
	lastName : 'france',
	mass : 86,
	height : 1.90 ,
	Bmi : function () {
	return this.bmi = this.mass / (this.height * this.height);
	}
}

 
johnBMI.Bmi();
markBMI.Bmi();
console.log(johnBMI, markBMI);
console.log(johnBMI.bmi);

if(markBMI.bmi > johnBMI.bmi)
console.log('marks bmi is greater');
else {
	console.log("john bmi is greater");
}