<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="p1">
		<div id="p1-1">
			<p id="p1-1-1">ly</p>
		</div>
	</div>
    <script type="text/javascript">
    	var p = document.getElementById("p1-1-1");
    	var p1 = document.getElementById("p1-1");
    	var p2 = document.getElementById("p1");
    	p.addEventListener("click", function(event){
    		console.log("click3");
    	},true);
    	p1.addEventListener("click", function(event){
    		console.log("click2");
    	},true);
    	p2.addEventListener("click", function(event){
    		console.log("click1");
    	},true);
    	p.addEventListener("click", function(event){
    		console.log("click3");
    	},false);
    	p1.addEventListener("click", function(event){
    		console.log("click2");
    	},false);
    	p2.addEventListener("click", function(event){
    		console.log("click1");
    	},false);
    </script>
</body>
</html>
