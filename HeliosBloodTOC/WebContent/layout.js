var vc,vctx,vi1,vi2,vi3;
var mons1, mons2;


function onclick() {
	
	 // background
	 vc=document.getElementById("canvas");
     vctx = vc.getContext("2d");
     vi1 = document.getElementById("bg");
     vctx.drawImage(vi1,0,0,800,600);
     document.getElementById("bg").style.display = "none"; //hiding the img file
     
     // character
     vi2 = document.getElementById("character");
     document.getElementById("character").style.display = "none"; // hiding the img file
     
     vi3 = document.getElementById("character2");
     document.getElementById("character2").style.display = "none"; // hiding the img file
     
     

}

function decmons(){

    mons1 = document.getElementById("mons1");
    document.getElementById("mons1").style.display = "none"; // hiding the img file

    mons2 = document.getElementById("mons2");
    document.getElementById("mons2").style.display = "none"; // hiding the img file
}

function onclickanim() {
	
	onclick();
	animation();

}

function station() { //redrawing
	vctx.drawImage(vi1,0,0,800,600);
	vctx.drawImage(vi2,dax,0,480,400,480,250,sizew,sizeh);
}

function monstation(dax) {
	vctx.drawImage(vi1,0,0,800,600);
	drawmons1(dax);
}


function stopanim(){
	
	stopanim = setInterval("animation()",300);
	}
function stopanim1() {
	
	clearInterval(stopanim);
	
}	

var dax=0; counter = 0; sizew=400; sizeh=400;

function animation() {
	if(counter >= 3 ) counter = 0; else counter ++;
	
	
	dax = 500 * counter;
	vctx.drawImage(vi1,0,0,800,600);
	drawchar(dax);
	
	
}


var fax=0; counter2 = 0;

function animation2() {
	if(counter2 >= 3 ) counter2 = 0; else counter2 ++;
	
	
	fax = 500 * counter2;
	drawchar2(fax,sizew,sizeh);
	
	
}


function drawmons1(dax,move2left){
	vctx.drawImage(mons1,dax,0,285,228,move2left,228,234,228);
}
function drawmons2(dax,move2right){
	vctx.drawImage(mons2,dax,0,270,228,move2right,228,234,228);
}

function drawbg(){
	vctx.drawImage(vi1,0,0,800,600);
	
}
function drawchar(dax){
	vctx.drawImage(vi2,dax,0,480,400,480,250,sizew,sizeh);
}

function drawchar2(dax,sizeh,sizew){
	vctx.drawImage(vi3,dax,0,480,400,0,250,sizew,sizeh);
}
