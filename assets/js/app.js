var cell = "brandon",
	obj1 = "",
	obj2 = "",
	board = {
		cell1: "kick",
		cell2: "snare",
		cell3: "hat",
		cell4: "piano",
		cell5: "harp",
		cell6: "synth",
		cell7: "violin",
		cell8: "horns",
		cell9: "bass",
		cell10: "shaker",
		cell11: "kick",
		cell12: "snare",
		cell13: "hat",
		cell14: "piano",
		cell15: "harp",
		cell16: "synth",
		cell17: "violin",
		cell18: "horns",
		cell19: "bass",
		cell20: "shaker"
	}

function click1(param) {
	console.log(param)
	obj1 = param;
}

function click2(param) {
	console.log(param)
	obj2 = param;
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
