function byId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

var btns = document.getElementsByClassName("btn"),
    index = 0,
    timer = null,
    pics = byId("banner").getElementsByTagName('div');
    len = pics.length;

  function slideImg(){
  	var banner = byId('banner');

  	banner.onmouseover = function(){
  		if(timer) clearInterval(timer);
  	}

  	banner.onmouseout = function(){
  		timer = setInterval(function(){
  			index++;
  			if(index >= len){
  				index = 0;
  			}
  			changeImg();
  		},1000)
  	}

  	banner.onmouseout();

  	for (var d=0; d<len;d++){
  		btns[d].id = d;
  		btns[d].onclick = function(){
  			index = this.id;
            changeImg();
  		}
  	}
  }

function changeImg(){
	for (var i=0; i<len; i++){
		pics[i].style.display = "none";
		btns[i].style.backgroundColor ="";
	}
	pics[index].style.display = 'block';
	btns[index].style.backgroundColor = "#FFCC00";
}

slideImg();
