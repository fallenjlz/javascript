var img = document.getElementById("image");
var maxBtn = document.getElementById("maxBtn");
var minBtn = document.getElementById("minBtn");

console.log(maxBtn);
console.log(minBtn);

maxBtn.onclick = function(){
    maxFun();  

} 

minBtn.onclick = function(){
	minFun();
}

var maxWidth = img.width * 2;

function maxFun(){
	var endWidth = img.width * 1.3;
	var endHeight = img.height * 1.3;
	var maxTimer = setInterval(function(){
		if(img.width < endWidth){
			if(img.width < maxWidth){
				img.width = img.width*1.05;
			    img.height = img.height*1.05;
			}else{
				clearInterval(maxTimer);
				console.log("Now it's max!")
			}
			
		}else{
			clearInterval(maxTimer);
		}
	},20);
}

var minWidth = img.width * 0.5;

function minFun(){
	var endWidth = img.width * 0.8;
	var endHeight = img.height * 0.8;
	var maxTimer = setInterval(function(){
		if(img.width > endWidth){
			if(img.width > minWidth){
				img.width = img.width*0.9;
			    img.height = img.height*0.9;
			}else{
				clearInterval(maxTimer);
				console.log("Now it's min!")
			}
			
		}else{
			clearInterval(maxTimer);
		}
	},20);
}