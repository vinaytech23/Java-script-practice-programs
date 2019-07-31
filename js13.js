var Employee = {
	firstName : 'vinay',
	lastName : 'kumar',
	empId : 100153,
	deptId : 1001,
	birthYear : 1995,
	eduDet : ["Degree","intermediate", "tenth"],
	calcAge: function (){
		this.age = 2019 - this.birthYear;
	}
};
var age = Employee.calcAge();
console.log(Employee['age']);
console.log(Employee.calcAge());

// document.write(Employee.eduDet);
console.log(Employee.firstName);
console.log(Employee.empId);
console.log(Employee['lastName']);
var a = 'birthYear';
Employee['deptId'] = 2001;
// Employee.birthYear = 1990;
console.log(Employee[a]);
console.log(Employee);


var Depatrment = new Object;
Depatrment.name = 'HR';
Depatrment.D_id = 2001;
Depatrment['manager'] = 'Shahrukh';
console.log(Depatrment);

