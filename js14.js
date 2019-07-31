var Employee = {
	firstName : "vinay",
	lastName : "kumar",
	Dept_id : 20001,
	Emp_id : 20001153,
	Dept_name : "HR",
	BirthYear : 1985,
	Job_Prof : "Assistant HR",
	isMarried : false,
	calcAge : function () {
		return 2019 - this.BirthYear;
	}
};

console.log(Employee.calcAge());
console.log(Employee);