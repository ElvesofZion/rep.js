	// rep.js
// Inspired and taken from Reputation Systems for Non-Player Character Interactions Based on Player Actions by Joseph Alexander Brown†, Jooyoung Lee‡, Nikita Kraev‡
	
	var Jasmine = require('jasmine');
	var test = new Jasmine();
	test.loadConfigFile('jasmine.json');
	const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

describe("rep.js", function() {

	beforeEach(function() {
    		
    });

	describe("NPC constructor", function() {
	// NPC Object constructor
	function NPC (name, location, likes, dislikes) {

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

		this.events.push(Event);

		it('adds events', function () {
			//add Event object type checker

			//test
			expect(this.events.includes(Event).toBeTruthy());
		});
	}
});
	// Event Object constructor
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

	var testNPC = new NPC('TestGuy', 'town', ['bananas', 'apples', 'mangos'], ['brocolli']);
	var testEvent = new Event('Dinner', ['food', 'vegatables'], 10);
	var testEvent2 = new Event('Breakfast', ['food', 'fruit'], 5);
	

	testNPC.addEvent(testEvent);

});
test.execute();