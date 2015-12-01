var cell = "brandon",
	obj1 = "",
	obj2 = "",
	turncount = 0;

function play(param) {
	if (turncount == 0) {
		function click1(param) {
			console.log(param.target.id)
			obj1 = param.target.id;
			turncount = 1;
		}
		click1(param);
	} else if (turncount == 1 ) {
		function click2(param) {
			console.log(param.target.id)
			obj2 = param.target.id;
			turncount = 0;
		}
		click2(param);
		checkMatch();
	}
}

function checkMatch() {
	if (obj1 === obj2 ) {
		console.log("you have a match!")
	} else {
		console.log("try again")
	}
	obj1 = "";
	obj2 = "";
}

$('.cell').on('click', play)
