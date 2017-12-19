EventUtil.addHandler(textbox, "keypress", function(event){
	event = EventUtil.getEvent(event);
	EventUtil.preventDefault(event);
})

//block only specific characters
//the regular expressiion/\d/.which matches all numeric characters.
EventUtil.addHandler(textbox, "keypress", function(event){
	event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var charCode = EventUtil.getCharCode(event); 
    
    if(!/\d/.text(String.fromCharCode(charCode))){
    	EventUtil.preventDefault(event);
    } 
})

EventUtil.addHandler(textbox, "keypress", function(event)){
	event = EventUtil.getEvent(event);
	var target = EventUtil.getTarget(event);
	var charCode = EventUtil.getCharCode(event);

	if(!/\d/.text(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey){
    	EventUtil.preventDefault(event);
    } 
}

EventUtil.addHandler(textbox, "paste", function(event){
	event = EventUtil.getEvent(event);
	var text = EventUtil.getClipboardText(event);

	if(!/^d*$/.test(text){
       EventUtil.preventDefault(event);
	}
})
