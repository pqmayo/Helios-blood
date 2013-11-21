var dc,dctx,diagbox;
var clickcount = 0;
var dialogue = new Array();

dialogue[0] = "*Next day...*";
dialogue[1] = "*Al walks to school*";
dialogue[2] = "*As he looks towards the building*";
dialogue[3] = "Al: Father... This is where my real trial begins";
dialogue[4] = "*Hears quick footsteps approaching* ";
dialogue[5] = "Familiar voice:AL GOESTAR!! ARISE AND FACE ME! ";
dialogue[6] = "*Al looks around for the source of the voice*";
dialogue[7] = "Amidst the hundreds of students present he finds one of His Classmates";
dialogue[8] = "Monty: Al Goestar!!! I Challenge you to a Duel!!";
dialogue[9] = "Monty: Everybody says you're the Real Deal, let's See how you fare against 'Python!!'";
dialogue[10] = "*With Over a Hundred witnesses, Al Finds himself in a tough situation.*" ;
dialogue[11] = "A sudden challenge from one of the greatest programmers in APC."; 
dialogue[12] = "He clinches his fist, looks straight at Monty and..";
dialogue[13] = "Al: I See, let's make this quick. So hurry up and Lose before first period, I Accept!!";
dialogue[14] = "Al : I summon thee, Izanagi !";
dialogue[15] = "Monty : Python reveal your form !";
dialogue[16] = "Al : Smile and wave Izanagi.";
dialogue[17] = "Monty : Don't get too cocky !";
dialogue[18] = "Monty : Aha ! An opening ! Pyhton show him what we've got, Burnvenom Coil !!";
dialogue[19] = "*Python is wrapped all over Izanagi*";
dialogue[20] = "Monty : I will overheat your puny varchar";
dialogue[21] = "Monty : And everyone knows that an overheating varchar is a useless varchar.";
dialogue[22] = "*Monty : This Battle is mine*";
dialogue[23] = "*Al cracked a little smile*";
dialogue[24] = "Al : Izanagi use Blaze King, and consume and use all his heat against him !";
dialogue[25] = "Monty : Wait ! ~ What ?!?!";
dialogue[26] = "Al : Summon the heat of the burning eclipse ...";
dialogue[27] = "Al : Eclipse Blast !";
dialogue[28] = "Monti : Madre di Dios ! I surrender,I utterly lost Al.";
dialogue[29] = "Monti :  you're one heck of a guy if my varchar did not have  shed skin, ";
dialogue[30] = "Monti : I would have been kicked out *phew*";
dialogue[31] = "Al : What ?";
dialogue[32] = "Monti : You don't know ? Well Man I suggest you read the handbook";
dialogue[33] = "Monti : Well for the mean time I'll explain to you.";
dialogue[34] = "Monti : If your varchar gets destroyed by another varchar, you are immediately expelled";
dialogue[35] = "Al : There's a rule like that ?!?!";
dialogue[36] = "Monti : Well its hard to believe but its true.";
dialogue[37] = "Al : Sorry , I did'nt know and I almost got you expelled.";
dialogue[38] = "Monti : Don't sweat it man, besides Im the one who challanged you anyways.";
dialogue[39] = "*They both proceed to class*";


function dialogact(){
	if (clickcount > 6) {
		animation2();	
		
	}
	
	
	if (clickcount > 13 && clickcount != 19){
		drawbg();
		drawmons1(0, 500);
		
	}

	
	if (clickcount > 14 && clickcount < 19) {
		drawmons2(0,180);
	}
	else if (clickcount >= 19){
		drawbg();
		drawmons1(280,300);
		if (clickcount >= 27 && clickcount < 29){
			drawbg();
			drawmons1(560,300);
		}
	}
	
	if (clickcount >= 29) {
		;
		drawbg();
		animation();
		animation2();	
		}
}



function dialogbox() {	
	
	
	if (clickcount < 40 ){
	onclickanim();
	dialogact();
	
	
	dc=document.getElementById("canvas");
	dctx=dc.getContext("2d");
	dctx.rect(20,500,760,80);
	dctx.fillStyle = "rgba(25, 25, 25, 0.7)";
	dctx.fill();
	dctx.fillStyle="white";
	dctx.font="20px Arial";
	dctx.fillText(dialogue[clickcount],30,520);

	
	clickcount++;
	}	
	
	
}