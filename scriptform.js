<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<form method="post" id="myForm">
		<ul>
			<li><input type="radio" name="color" value="red">Red</li>
			<li><input type="radio" name="color" value="blue">Blue</li>
			<li><input type="radio" name="color" value="green">Green</li>
		</ul>
	</form>
   <script>
   	    var form = document.getElementById("myForm");
   	    var colorFields = form.elements["color"];
   	    alert(colorFields.length);
   	    var firstColorField = colorFields;
   	    var firstForm = form.elements[0];
   	    alert(firstColorField === firstForm);
   </script>
</html>
