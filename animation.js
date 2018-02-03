<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>js animation</title>
	<style>
        *{
        	margin:0;
        	padding:0;
        }

		#div1{
			width: 200px;
			height:200px;
			background-color:#A3E4D7;
			position:relative;
			left:-200px;
		}

		#share{
			width: 20px;
		    height:50px;
		    position:absolute;
            top:100px;
            left:200px;
            margin-top: -25px;
            background-color:#F7DC6F;
		}

	</style>
	<script>
		window.onload=function(){
			var oDiv = document.getElementById("div1");
			oDiv.onmouseover = function(){
				startMove(0);
			}
			oDiv.onmouseout = function(){
				startMove(-200);
			}
            
            var timer = null;
			function startMove(iTarget){
				clearInterval(timer);
				var oDiv = document.getElementById("div1");
				timer = setInterval(function(){
					var speed = 0;
					if(oDiv.offsetLeft > iTarget){
						speed = -10
					}else{
						speed = 10;
					}
					if(oDiv.offsetLeft == iTarget){
						clearInterval(timer);
					}else{
						oDiv.style.left = oDiv.offsetLeft+speed+"px";
					}
				})
			}
		}
	</script>
</head>
<body>
	<div id="div1">
		<span id="share">share</span>
	</div>
</body>
</html>
