textbox.value = "Hello world!"

textbox.setSelectionRange(0. textbox.value.length);

textbox.setSelectionRange(0,3);
textbox.setSelectionRange(4,8);

text.value = "hello world!";

var range = textbox.createTextRange();

//select all text
range.collapse(true);
range.moveStart("character",0);
range.moveEnd("character", textbox.value.length);
range.select();

//select first three characters
range.collapse(true);
range.moveStart("character", 0);
range.moveEnd("character", 3);
range.select();

//select character 4 through 6
range.collapse(true);
range.moveStart("character", 4);
range.moveEnd("character", 3);
range.select();

function selectText(textbox, startIndex, stopIndex){
	if (textbox.setSelectionRange){
		textbox.setSelectionRange(startIndex, stopIndex);
	}else if (textbox.createTextRange){
		var range = textbox.createTextRange();
		range.collapase(true);
		range.moveStart("character", startIndex);
		range.moveEnd("character", stopIndex - startIndex);
	}
	textbox.focus();
}

textbox.value = "Hello world!";
//select all text
selectText(textbox, 0 , textbox.value.length);

//select first three characters
selectText(textbox, 0 , 3);

//select characters 4 throught 6
selectText(textbox, 4, 7);
