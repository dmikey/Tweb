var app = {};
var oauth;
var options = { consumerKey: '',
				consumerSecret: '',
				callbackUrl: window.location };
				
app.initialize = function(){
	//check if accounts exist
	app.accounts.load();

}

