//DOM Styles Properties and Methods
myDiv.style.cssText = "width: 25px; height:100px; background-color:green";
alert(myDiv.style.cssText);
for (var i=0, len=myDiv.style.length; i < len; i++){
    alert(myDiv.style[i]);
}
var prop, value, i, len;
for (i=0, len=myDiv.style.length; i < len; i++){
    prop = myDiv.style[i];
    value = myDiv.style.getPropertyValue(prop);
    alert(prop + " : " + value);
}

var prop, value, i, len;
for (i=0, len=myDiv.style.length; i < len; i++){
    prop = myDiv.style[i];
    value = myDiv.style.getPropertyCSSValue(prop);
    alert(prop + " : " + value.cssText + " (" + value.cssValueType +")");
}


var myDiv = document.getElementById("myDiv");
		var computedStyle = myDiv.currentStyle;
		var computedStyle = document.defaultView.getComputedStyle(myDiv, null);

		alert(computedStyle.backgroundColor);
		alert(computedStyle.width);
		alert(computedStyle.height);
		alert(computedStyle.border);

		var sheet = document.styleSheets[0];
		var rules = sheet.cssRules || sheet.rules; //get rules list
		var rule = rules[0]; //get first rule
		alert(rule.selectorText);
		alert(rule.style.cssText);
		alert(rule.style.backgroundColor);
		alert(rule.style.width);
		alert(rule.style.height);

		var sheet = document.styleSheets[0];
		var rules = sheet.cssRules || sheet.rules;
		var rule = rules[0];
		rule.style.backgroundColor = "red";
