function setupImage(puzzleObj, xyValues){
	var a = [];
	for(var i = 0; i < 2; i++){
		switch(xyValues[i]){
			case 0:
				a.push("0%");
				break;
			case 100:
				a.push("25%");
				break;
			case 200:
				a.push("50%");
				break;
			case 300:
				a.push("75%");
				break;
			default:
				console.log("*ERROR: out of bound case value.(setupImage)");
		}
	}
	
	
	puzzleObj.style.backgroundSize = "512%";
	puzzleObj.style.backgroundPosition = a[0] + " "+ a[1];
}

document.addEventListener("DOMContentLoaded",function(){
	var leftside=0;
	var topside=0;
	var puzz = [];
	
var puzz=document.getElementById("puzzlearea").querySelectorAll("div");
for (var t=0; t<puzz.length; t++)
{
	//console.log("leftside: "+leftside+" topside: "+topside);
	puzz[t].className="puzzlepiece";
	puzz[t].style.left=leftside+"px";
	puzz[t].style.top=topside+"px";
	setupImage(puzz[t], [leftside, topside]);
	leftside+=100;
	if(leftside == 400)
	{
		leftside = 0;
		topside += 100;
	}
}
function blank (a) {
	var ls = 0;
	var ts = 0;
	if (a.offsetParent)
	{
		ls+= a.offsetLeft;
		ts+= a.offsetTop;
	
	
	}
 }
 
 var free = document.createElement ("div");
	free.style.left = "300px";
	free.style.width = "96px";
	free.style.height = "96px";
	free.style.top = "300px";
	free.style.position = "aboslute";
	free.style.backgroundImage = "none";
	free.style.border = "2px solid white";
var freep = document.getElementById("puzzlearea").appendChild(free);

function move() {
	for (var i=0; i<puzz.length; i++)
	{
		var j=checkt(puzz[i]);
		var k=checkb(puzz[i]);
		var l=checkl(puzz[i]);
		var m=checkr(puzz[i]);
		
		if (puzz[i].innerHTML !=" " && j=="true" || k == "true" || l == "true" || m == "true")
		{
			puzz[i].className += "movablepiece";
		}
	}
}

function checkr(s)
    {
    	
if (parseInt(s.style.left)-(parseInt(add.style.left))==(-100) && (parseInt(s.style.top)==parseInt(add.style.top))){
		return "true";
    	
    }
}

function checkl(s)
    {
    	
if (parseInt(s.style.left)-(parseInt(add.style.left))==(-100) && (parseInt(s.style.top)==parseInt(add.style.top))){
		return "true";
    	
    }
}

function checkb(s){

if (parseInt(s.style.top)-parseInt(add.style.top)== -100 && (parseInt(s.style.left)==parseInt(add.style.left))){
			return "true";
    
    }
}
function checkt(s){

if (parseInt(s.style.top)-parseInt(add.style.top)== -100 && (parseInt(s.style.left)==parseInt(add.style.left))){
			return "true";
    
    }
}

var shuffle = function ()
{
	for (var z= 0; z<puzz.length; z++)
	{
		puzz[z].className=puzz[z].className.replace("movablepiece","")
		var random = Math.floor(Math.random() * (14)+1);
		var temp = puzz[random].style.top;
		puzz[random].style.top = freep.style.top;
		freep.style.top = temp;
		temp = puzz[random].style.left;
		puzz[random].style.left = freep.style.left;
		freep.style.left=temp;
		
	}	
	
}
document.getElementById("shufflebutton").onclick = function ()
{
	shuffle();
	move ();
	//play();
	
}

});
 