var TodayBill = {
	restTips : [],
	calTotal : [],
	restbills : [124, 48, 268, 180, 42],
	pTotalT : null,
	calcTip : function () {
				// this.restTips = [];
				// this.calTotal = [];
			for(var i=0; i < this.restbills.length; i++)
			{
				
				var bi = this.restbills[i];
				var pct;
				if(bi < 50)
				{
					pct = 0.2;
				} else if (bi > 50 && bi < 200) {
					pct = 0.15;
				}else {
					pct = 0.1;
				}
				 // return tipsP;
				
					this.restTips[i] = pct * bi;
					this.calTotal[i] = bi + pct * bi;
					
					TodayBill.pTotalT = TodayBill.restTips[i] + TodayBill.pTotalT;
			}	
	}
}

TodayBill.calcTip();
console.log(TodayBill);
console.log(TodayBill.pTotalT);
var VinayKumar = {
	vBills : [77,375,110,45],
	vCalPer : [],
	vTotal : [],
	pTotal : null,
	calTotalBill : function () {
		var pert;
		for (i= 0; i < VinayKumar.vBills.length; i++)
		{
			if(VinayKumar.vBills[i] < 100)
			{
				pert = .20;
			} else if (VinayKumar.vBills[i] > 100 && VinayKumar.vBills[i] < 300) {
				pert = .10;			
			} else{
				pert = .25;
			}

			VinayKumar.vCalPer[i] = VinayKumar.vBills[i] * pert;
			VinayKumar.vTotal[i] = VinayKumar.vBills[i] + VinayKumar.vCalPer[i]; 
			
			VinayKumar.pTotal = VinayKumar.vCalPer[i] + VinayKumar.pTotal;
		}
	}
}

VinayKumar.calTotalBill();
console.log(VinayKumar);

console.log(VinayKumar.pTotal);

(function () {
	if((VinayKumar.pTotal/VinayKumar.vBills.length) > (TodayBill.pTotalT/TodayBill.restbills.length)) 
	{
		console.log("Vinay kumar paid more tips");
	} else {
		console.log("Today bills paid more tips ");
	}
})();































// var john = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = [];
//         this.finalValues = [];
                
//         for (var i = 0; i < this.bills.length; i++) {
//             // Determine percentage based on tipping rules
//             var percentage;
//             var bill = this.bills[i];
            
//             if (bill < 50) {
//                 percentage = .2;
//             } else if (bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }
            
//             // Add results to the corresponing arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }


// john.calcTips();
// console.log(john);