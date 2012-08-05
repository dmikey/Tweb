enyo.kind({ name: "helpers", 
			kind:  enyo.Component,
			WrapText: function (Input) {
						var FillChar = "</br>";
						var MaxLength = 27;
						var pattern = new RegExp("([^s]{" + MaxLength + "})");
						var myString = Input;
						return myString.replace(pattern, "$1"+FillChar);
					},
			getParameterByName: function (name){
							  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
							  var regexS = "[\\?&]" + name + "=([^&#]*)";
							  var regex = new RegExp(regexS);
							  var results = regex.exec(window.location.search);
							  if(results == null)
								return "";
							  else
								return decodeURIComponent(results[1].replace(/\+/g, " "));
					}
					
});