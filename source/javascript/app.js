//enyo enters at App
enyo.kind({
	name: "App",
	rendered:function(){
	
		//set app.me to the main app container
		app.me = this;
		
		//call the app bootstrap
		app.initialize();
	
		
	}
});




