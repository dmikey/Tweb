//gui components
//these need to be defined in the KIND enyo.Component at the bottom if you want them to be
//loaded by enyo.
//
//enyo loads all components from app.js as defined components. 
//while this may look a little weird, these are all our views, and all the methods the maybe
//needed to facilitate interacting with those views.


//ACCOUNT GUI
enyo.kind({ name: "PopupNoAccounts", 
			kind: "onyx.Popup", 
			centered: true, 
			floating: true, 
			classes:"onyx-sample-popup", 
			style: "padding: 10px;", 
			components:[{content: "Popup..."}],
			rendered:function(){
			
				
			}	
});


//define all GUI components here
enyo.kind({ name: "gui", 
			kind:  enyo.Component,
			components:[{name: "NoAccounts", kind: "PopupNoAccounts"}]
});

