//enyo enters at App
enyo.kind({
	name: "App",
	rendered:function(){
	
		//set app.me to the main app container
		app = this;
		

	
		
	},
	//with-in the enyo framework we will declare all our other components that have been built elsewhere.
	components:[{name: "gui", kind: "gui"}]
});




