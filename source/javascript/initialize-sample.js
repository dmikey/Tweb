var app;
var oauth;
var options = { consumerKey: '',
				consumerSecret: '',
				callbackUrl: window.location };

enyo.kind({ name: "initialize", 
			kind:  enyo.Component,
			init: function(){	
				//check for accounts in the system
				app.$.accounts.load();
			}
});