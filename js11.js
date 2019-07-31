function members () {
	var member =prompt("Enter the name of the player");
	score();
}
function score () {
		var match1 = prompt("Enter the score of the first match");
		var match2 = prompt("Enter the second match score") ;
		var match3 = prompt("enter th score of the third match");
		avgOfScore(match1, match2,match3);
	}
function avgOfScore (match1,match2,match3) {
	console.log(match1, match2, match3);
	var total = Number(match1) + Number(match2) + Number(match3);
	console.log(total); 
 	var	avg = total / 3;
 	alert("Score average is : " + avg + " "+total);
}
// for(let i=0; i<3;i++){
	members();
	// var x= prompt("Enter \"true\" to calculate next team avg :");

// }



// }
// while (x === true);