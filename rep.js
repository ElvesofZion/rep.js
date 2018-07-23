// rep.js
// Inspired and taken from Reputation Systems for Non-Player Character Interactions Based on Player Actions by Joseph Alexander Brown†, Jooyoung Lee‡, Nikita Kraev‡
	
// setup Jasmine test suite
var Jasmine = require('jasmine');
var test = new Jasmine();
test.loadConfigFile('jasmine.json');

// setup server instance
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//start server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

describe("rep.js", function() {
	
	/**
	 * NPC Constructor
	 * @param {[type]} name     [description]
	 * @param {[type]} location [description]
	 * @param {[type]} likes    [description]
	 * @param {[type]} dislikes [description]
	 */
	function NPC (name, location, likes, dislikes) {
		// describe("NPC constructor", function() {
		//add no name error here
		//add no location error here
		//add type erorr handlers here
		//add warnings about no likes or dislikes
		
			return {
				name: name,
				location: location,
				likes: [],
				dislikes: [],
				events: [],
				unforget: [],
				addLikes: addLikes,
				addDislikes: addDislikes,
				removeLikes: removeLikes,
				removeDislikes: removeDislikes,
				addEvent: addEvent
			}

	}

	//npc helper functions
	function addLikes() {};
	function addDislikes() {};
	function removeLikes() {};
	function removeDislikes() {};
	function addEvent(Event) {
		//add Event object type checker
		this.events.push(Event);
	}

	/**
	 * Event Constructor
	 * @param {[type]} name       [description]
	 * @param {[type]} categories [description]
	 * @param {[type]} weight     [description]
	 */
	function Event (name, categories, weight) {

		//add no name error here
		//add no category error here
		//add no weight error here
		//add type erorr handlers here
		
		return {
			name: name,
			categories: categories,
			weight: weight
		}
	}

	/**
	 * Constructor for PC objects
	 * @constructor
	 */
	function PC() {

	}

	/**
	 * Triggers knowledge of an event to NPCs
	 * @return {[type]} [description]
	 */
	function propogate() {

	}
	/**
	 * Uses an events stats and NPC's preferences to adjust player rep
	 * @return {[type]} [description]
	 */
	function adjustRep() {

	}

	/// Test Execution ////
	var testNPC = new NPC('TestGuy', 'town', ['bananas', 'apples', 'mangos'], ['brocolli']);

	// it('adds events', function () {
			
	// 	expect(this.events.includes(Event).toBeTruthy());
	// });

	var testEvent = new Event('Dinner', ['food', 'vegatables'], 10);
	var testEvent2 = new Event('Breakfast', ['food', 'fruit'], 5);
	

	testNPC.addEvent(testEvent);

});
test.execute();