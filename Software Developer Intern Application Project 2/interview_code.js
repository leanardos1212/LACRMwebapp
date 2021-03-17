//jQuery and underscore already included

//Also already include are three json files that define three vars: routes, stops, and routeStops. Those vars have
//all the data you'll need for this project.


$(function(){
	//if you haven't used jQuery before, the code in here runs when the page first loads




	
	
	
	//As a test, let's add some html to the document. We'll make a simple dropdown list.
	//Just call the `InsertText` function with the id of the element you want to insert html inside
	//and the content to add.
	InsertText('mainContent',`Pick a Route:
		<select onchange='nameAdder()' name = 'dropdown' id = 'selectId'>
		<option>Routes</option>
		</select><div id = 'stopContent'></div>`)
	InsertText('stopContent',"<ul id = 'stops'></ul>");
	txt = ''
		
	// for in loop to populate select with options from routes.json
	for(x in routes){
		
		txt += (routes[x].shortName+' - ' +routes[x].longName);
		options = "<option id = "+x+">"+txt+"</option>";
		$('#selectId').append(options);
		txt = '';
		};

		
	

	

	
	
		
	


	
	//Also, as a test, let's take a look at some of the data from the json files. This will log it to your browsers
	//javascript console. You can see the output by opening up the dev tools in your browser.
	// console.log(routes);

	// sets local time 
	let intervalBySecond = setInterval(myTimer, 1000);

	function myTimer() {
  	let d = new Date();
  	let t = d.toLocaleTimeString();
  	document.getElementById("time").innerHTML = t;
} 

})


//This is a helper function we're giving you to insert any html you want inside an element with the specified Id
function InsertText(Id, Text){
	var Element = document.getElementById(Id);
	Element.innerHTML = Text;
};

//Onclick function that takes selection(route) and provides relevent stops
function nameAdder(){
	//refreshes selection
	$('#stops').empty();
	// finds selection 
	testSelect = $('#selectId').find('option:selected').attr("id");
	// variables for JSON to string/text & counter
	txt=''
	smallTxt=''
	stopTime=''
	counter=0

	// for in loops through route stops
	for (i in routeStops){
		// compares IDs from route stops to routes
		if(routeStops[i].routeId == testSelect){
			for(z in stops){
				// compares IDS from stops to route stops and if true populates Name and Description
				if(stops[z].stopId == routeStops[i].stopId){
					txt += stops[z].name;
					smallTxt += stops[z].description;
					stopTime += routeStops[i].arrivalTime+"-"+routeStops[i].departureTime
					if (smallTxt == 'null'){
						smallTxt = 'No Description'
					}
					// counter & name of stop, then description, and finally arrival and departure time
					options = "<p id='remove'>Stop "+counter+":"+txt+"</p>"+"<p><small><i>"+smallTxt+"</i></small></p>"+"<p><small><i>"+stopTime+"</i></small></p>";	
					$('#stops').append(options);
					smallTxt = ''
					txt=''
					stopTime=''
					counter++
				}
			}
			
		}
		
	}
	
};

	






