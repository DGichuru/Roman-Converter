var conversion = [[1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000],  
["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]];


function enterListener(event){
	if (event.which == 13){
		document.getElementById("button").click();
	}
}

function getRomanNumeric() {
	
	// get user input
	var number = document.getElementById("number").value;

	// store round number
	var roundNum = 0;

	// check if user enters nonnegative number
	if (number <= 0 || number > 3999 || isNaN(number)){
		alert("number must be in the range of 1-4999");
	}
	else{

		// check if number is whole
		if (number % 1 != 0){
			roundNum = Math.round(number);
			alert(number + " will be round to " + roundNum);
			number = roundNum;		
		}

		// initiate roman numeric
		var romanNum = "";

		// iterate until number is reduced to zero
        while(number > 0)
        {
			for(var i = 12; i >= 0; i--)
			{
				if(conversion[0][i] <= number)
				{
					break;
				}
			}
			romanNum += conversion[1][i];
			number -= conversion[0][i];
		}

		// print roman numeric
		document.getElementById("answer").value=romanNum;
	}
}
