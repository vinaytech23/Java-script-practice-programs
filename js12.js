var firstName, job;
var whatYouDo =function (job, firstName) {
	switch (job) {
		case "teacher":
			return firstName + "teashes kids how to code";
			break;
		case "driver":
			return firstName + "drives car in uber";
			break;
		case "developer":
			return firstName + "developes code for software";
			break;

		default:
			return firstName + "do something else";
			break;
	}
}

var result= whatYouDo("teacher", "vinay");
console.log(result);

console.log(whatYouDo("driver","pradesh"));
console.log(whatYouDo("developer", "shantha"));
console.log(whatYouDo("null","asdfasdf"));