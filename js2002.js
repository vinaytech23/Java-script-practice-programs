var greetings = ["This is vinay from warangal",
					"I studied in warangal",
					"Since then I worked for two Engineering Colleges",
					"I worked in Hyderabad ACT also",
					"My birthday is on 3rd, May 1989"];

for (var i = 0; i < greetings.length; i++) {

if(greetings[i].indexOf('birthday') !== -1){
	console.log('====================================');

	console.log(greetings[i]);
	console.log("Happy birthday vinay");
}
if (greetings[i].indexOf('warangal') !== -1) {
	console.log(greetings[i]);

	};
}