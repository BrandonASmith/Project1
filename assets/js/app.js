var cell = "brandon",
	obj1 = "",
	obj2 = "",
	turncount = 0;
	sounds = ["piano.wav","hihat.wav","harp.wav","clap.wav","shaker.wav","808.wav","drumroll.wav","Yeah.wav","What.wav"]


var soundPicker = sounds[Math.floor(Math.random() * sounds.length)];
    console.log(soundPicker);
    // document.write(soundPicker);
    document.querySelector("#soundPrint").innerHTML = soundPicker;
}


function play(param) {
	if (turncount == 0) {
		function click1(param) {
			console.log(param.target.class)
			obj1 = param.target.class; //changed Id to class to fix matching problem, but now undefined
			turncount = 1;
		}
		click1(param);
	} else if (turncount == 1 ) {
		function click2(param) {
			console.log(param.target.class)
			obj2 = param.target.class; //changed Id to class to fix matching problem, but now undefined
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



