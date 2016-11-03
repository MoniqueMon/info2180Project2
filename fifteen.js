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

//function shuffle (){
	//
//}

document.addEventListener("DOMContentLoaded",function(){
	var leftside=0;
	var topside=0;
	var puzzle = [];
	
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
});

/*function empty (p){
	var left = 0;
	var top = 0;
	if (p.offsetParent)
	{
		leftside+= p.offsetLeft;
		topside+= p.offsetTop;
		
	}
} 
var 
var move = document.createElement("div");
$("puzzlearea").appendChild(move);
empty(move); 

puzzle = $$("puzzlearea div"); 
$("shufflebutton").observe('click',shufflePuzzle);
movetile(); 

var blankP = function(el){
  el.removeClassName("movablepiece");
  el.addClassName("puzzlepiece");
  el.style.float = "left";
  el.style.backgroundImage = "none";
  el.style.border = "2px solid white";
};
var regularP = function(p){
      p.addClassName("puzzlepiece");
      p.style.border = "2px solid black";
      p.style.backgroundImage = "url(background.jpg)";
      p.style.backgroundSize = "400px 400px";
}

function shufflePuzzle(){
	var numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	for (var i=puzzle.length; i>0; i){
		var j = Math.floor(Math.random() * i);
		var x = numArray[--i];
		var test = numArray[j];
		if(test == "0") { 
			puzzle[i].addClassName("puzzlepiece");
	 		blankP(puzzle[i]);
	 		puzzle[i].innerHTML = "";
					}
		else{
     			puzzle[i].innerHTML = numArray[j];
      			regularP(puzzle[i]);
      			background_Position(puzzle[i], test);
          }
			numArray[j] = x;
    }
  	mopiece();
   }
   
   var movepiece = function(){
    var move = this.innerHTML;
    var yon = this.hasClassName('movablepiece');
    var blank = 0;
    if (yon){
      	for (var i=0;i<puzzle.length;i++){
        	blank = puzzle[i].innerHTML;
         	if (puzzle[i].innerHTML == ""){
          		puzzle[i].innerHTML = move;
          		this.innerHTML = blank;

          		regularP(puzzle[i]);
          		blankP(this);

        		 mopiece();
        		 background_Position(puzzle[i], move);
      }    
     } 
   }
         };
		 
var mopiece = function(){
	for (var i=0;i<puzzle.length;i++){
		puzzle[i].removeClassName("movablepiece");	}
		  for (var i=0; i<puzzle.length; i++){
  			if (puzzle[i].innerHTML == ""){         
 				  puzzle[i].removeClassName("movablepiece");

  				switch(i){
  					case 0:
  						movePA(i+1);
  						movePA(i+4);
              					break;
  					case 1:
  					case 2:
  						movePA(i-1);
  						movePA(i+1);
        					movePA(i+4);
  						break;
  					case 3:
  						movePA(i-1);
  						movePA(i+4);
  						break;
  					case 4:
  						movePA(i-4);
  						movePA(i+4);
  						movePA(i+1);
  						break;
  					case 5:
  					case 6:
  					case 9:
  					case 10:
  						movePA(i-4);
  						movePA(i+4);
  						movePA(i+1);
  						movePA(i-1);
              					break;
  					case 7: 
  					case 11:
  						movePA(i-4);
  						movePA(i+4);
  						movePA(i-1);
              					break;
  					case 8:
  						movePA(i-4);
  						movePA(i+1);
  						movePA(i+4);
  						break;
  					case 12:
  						movePA(i-4);
  						movePA(i+1);
  						break;
  					case 13: 
  					case 14:
  						movePA(i-4);
  						movePA(i-1);
  						movePA(i+1);
  						break;
  					case 15:
  						movePA(i-4);
  						movePA(i-1);
  						break;
  					}       	
  		}
      			puzzle[i].observe('click', movepiece); }  


}); 
*/