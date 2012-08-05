//enyo enters at App
enyo.kind({
	name: "App",
	rendered:function(){
		//set app to the main app container
		app = this;
		app.$.initialize.init();
	},
	//with-in the enyo framework we will declare all our other components that have been built elsewhere.
	components:[{name: "initialize", kind: "initialize"},
				{name: "gui", kind: "gui"},
				{name: "accounts", kind: "accounts"},
				{name: "helpers", kind: "helpers"}]
});




