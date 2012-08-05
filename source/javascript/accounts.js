
//this file contains the logic to add accounts to local storage, as well as account authentication and callback for oauth
function appthing(){			
	//verify initial accounts			
	var oauth_token = getParameterByName("oauth_token");
	var accessData = localStorage.accessdata;
	var loadGUI = false;
	accessData = ""
	if(accessData == ""){
			//if no accounts found, then ask if we need to add accounts
			if(oauth_token != ""){
				localStorage.oauth_token = oauth_token;
				localStorage.oauth_verifier = getParameterByName("oauth_verifier");
				this.getAuth();
			}else{
				var p = app.$.gui.$.NoAccounts;
				if (p) {
					p.show();
				}
			}
			}else{
				//user has at least a single account stored in localStorage
			
	}
}
