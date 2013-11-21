var dc,dctx,diagbox;
var clickcount = 0;
var dialogue = new Array();

dialogue[0] = "*Teacher walks in*";
dialogue[1] = "George: Good Morning Class, Please take your seats.";
dialogue[2] = "George: In the next few weeks we will learn about 3 things.";
dialogue[3] = "George: 1st is Varchar Piloting.";
dialogue[4] = "George: 2nd is Augmented Chips also known  as 'Appforge'.";
dialogue[5] = "George: and lastly how to control your Varchars using your Augmented Chips.";



function nxtPage(){
	
	window.location.assign("Chapter2Scene3.html"); // insert next scene
}


function dialogbox() {	
	if (clickcount < 6) {
	station();
	dc=document.getElementById("canvas");
	dctx=dc.getContext("2d");
	dctx.rect(20,500,760,80);
	dctx.fillStyle = "rgba(25, 25, 25, 0.7)";
	dctx.fill();
	dctx.fillStyle="white";
	dctx.font="20px Arial";
	dctx.fillText(dialogue[clickcount],30,520);
	}
	else {nxtPage();}
	clickcount++;
		
	
	
}