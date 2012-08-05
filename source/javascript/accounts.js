//define all account handling components
//this file contains the logic to add accounts to local storage, as well as account authentication and callback for oauth
//
//need to move local storage handling out of this and into a storage component, lots of those available via enyojs.com
enyo.kind({ name: "accounts", 
			kind:  enyo.Component,
			load: function(){			
								//verify initial accounts			
								var oauth_token = app.$.helpers.getParameterByName("oauth_token");
								var accessData = localStorage.accessdata;
								var loadGUI = false;

								if(accessData == ""){
										//if no accounts found, then ask if we need to add accounts
										if(oauth_token != ""){
											localStorage.oauth_token = oauth_token;
											localStorage.oauth_verifier = getParameterByName("oauth_verifier");
											this.getAuth();
										}else{
											var p = this.$.NoAccounts;
											if (p) {
												p.show();
											}
										}
										}else{
											//something is stored in localStorage?
							
								}
							}
});

