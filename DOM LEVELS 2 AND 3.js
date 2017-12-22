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
