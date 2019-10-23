function cls() {
	body = document.getElementById("body");
	while (body.hasChildNodes()) {
		body.removeChild(body.firstChild);
	}
	console.log("[DEBUG] Cleared Screen.");
}
function getTitle(title) {
	var div = document.createElement("div");
	div.setAttribute("class", "title")
	// "div" now has the id of "title"
	var body = document.getElementById("body");
	body.appendChild(div);
	// body >> div
	
	var ele = document.createElement("span");
	var txt = document.createTextNode(title);
	ele.appendChild(txt);
	// <span> {whatever text the variable "text" is} </span>
	div.appendChild(ele);
	
}
function getContainer(container) {
	
	function getContainer(container) {
	
	}
	var div = document.createElement("div");
	div.setAttribute("class", container);
	div.setAttribute("id", "grid-container");
    // div is created
	var body = document.getElementById("body");
	body.appendChild(div);
	// div is appended
}
function getContainerNoun(container) {
	var div = document.createElement("div");
	div.setAttribute("class", container + " noun");
	div.setAttribute("id", "grid-container-newWord-" + wordCount.id);
    // div is created
	var body = document.getElementById("body");
	body.appendChild(div);
	// div is appended
}


function getContainerVerb(container) {
	var div = document.createElement("div");
	div.setAttribute("class", container + " verb");
	div.setAttribute("id", "grid-container-newWord-" + wordCount.id);
    // div is created
	var body = document.getElementById("body");
	body.appendChild(div);
	// div is appended
}
function getContainerAdj(container) {
	var div = document.createElement("div");
	div.setAttribute("class", container + " adj");
	div.setAttribute("id", "grid-container-newWord-" + wordCount.id);
    // div is created
	var body = document.getElementById("body");
	body.appendChild(div);
	// div is appended
}

function getButton(text, grid, func) {
	var div = document.createElement("div");
	div.setAttribute("class", grid);
	// "div" has class of "grid-item"
	var container = document.getElementById("grid-container");
	container.appendChild(div);
	// grid-container >> grid-item
	
	
	var button = document.createElement("button");
	button.setAttribute("class", "button");
	button.setAttribute('onclick', func);
	var txt = document.createTextNode(text);
	button.appendChild(txt);
	div.appendChild(button);
	
}
function buttonRemove() {
	var div = document.createElement("div");
	div.setAttribute("class", "newWord-Remove");
	div.setAttribute("id", "newWord-Remove");
	// "div" has class of "grid-item"
	var container = document.getElementById("grid-container-newWord-" + wordCount.id);	container.appendChild(div);
	// grid-container >> grid-item
	
	var button = document.createElement("button");
	button.setAttribute("class", "newWord-remove");
	button.setAttribute('onclick', "delNewWord()");
	var txt = document.createTextNode("Remove");
	button.appendChild(txt);
	div.appendChild(button);
	
}
function delNewWord() {

	var containerbutton = "newWord-Remove";
	var e = document.getElementById(containerbutton);
	e.parentElement.remove(e);

/* BAD CODE: / ALTERNATE
	var containerverb = "grid-container-newWord-" + wordCount.id;

	var e = document.getElementById(containerverb);
	console.log(e);
	console.log(wordCount.verbs)
	console.log(e);
	e.parentNode.removeChild(e);
*/
	}
function getSaveButton() {
	var div = document.createElement("div");
	div.setAttribute("class", "save");
	// "div" has class of "grid-item"
	var container = document.getElementById("body");
	container.appendChild(div);
	// grid-container >> grid-item
	
	
	var button = document.createElement("button");
	button.setAttribute("class", "save"); 
	button.setAttribute('onclick', 'newSave()');
	var txt = document.createTextNode("Save & Name");
	button.appendChild(txt);
	div.appendChild(button);
	
}
// getButton(Text, Placement, OnClick);


function getWordText(text, attributes) {
	var textbox = document.createElement("input");
	textbox.setAttribute("class", attributes);
	textbox.setAttribute("placeholder", text);
	
	var container = document.getElementById("grid-container-newWord-" + wordCount.id);
	container.appendChild(textbox);
}
function getWordNormalText(text, attributes) {
	var newtext = document.createElement("span");
	newtext.setAttribute("class", attributes);
	txt = document.createTextNode(text);
	newtext.appendChild(txt)
	var container = document.getElementById("grid-container-newWord-" + wordCount.id);
	container.appendChild(newtext);
}

var wordCount = { 
	nouns: 0,
	verbs: 0,
	adj: 0,
	adv: 0,
	
	id  : 0
}


function mainMenu() {
getTitle("LaQuiz");
getContainer("grid-container");
getButton("Study Existing Decks", "Existing", "Existing()");
getButton("New Study Deck", "NewDeck", "NewDeck()");
getButton("Presets", "Presets", "Presets()");
}
mainMenu();



function NewDeck() {
	cls();
	getSaveButton();
	getTitle("Create a new study deck");
	getContainer("grid-container-2");
	getButton("New Nown", "Nouns", "newNoun()");
	getButton("New Verb", "Verbs", "newVerb()");
	getButton("New Adjective", "Adj", "newAdj()");
	getButton("New Adverb", "Adv", "newAdv()");

}

function newNoun() {
	wordCount.nouns++;
	wordCount.id++;
	getContainerNoun("grid-container-newWord");
	getWordText("Noun Definition", "newNoun-Def");
	getWordNormalText("-", "newVerb-Dash");
	getWordText("Singular Subject", "newNoun-1");
	getWordText("Singular Possessive", "newNoun-2");
	getWordText("Gender", "newNoun-Gen");
	getWordText("Declension", "newNoun-Decl");
	getWordText("Derivative", "newNoun-Der");

	buttonRemove();
	
	console.log("[DEBUG] New noun.");
}

function newVerb() {
	wordCount.verbs++;
	wordCount.id++;
	getContainerVerb("grid-container-newWord");
	getWordText("Verb Definition", "newVerb-Def");
	getWordNormalText("-", "newVerb-Dash");
	getWordText("1st Principal Part", "newVerb-1");
	getWordText("2nd Principal Part", "newVerb-2");
	getWordText("3rd Principal Part", "newVerb-3");
	getWordText("4th Principal Part", "newVerb-4");
	getWordText("Derivative", "newVerb-Der");
	console.log(wordCount.id);
	buttonRemove();
	
	console.log("[DEBUG] New verb.");
}

function newAdj() {
	getContainer("grid-container-newAdj");

	console.log("[DEBUG] New adj.");
}
function newAdv() {
	getContainer("grid-container-newAdv");
	
	console.log("[DEBUG] New adv.");
}
var WORDVERBS = [[], [], []];
function newSave() {
	
    container = document.getElementById("grid-container-newWord-" + wordCount.id);
	verbdef = document.getElementsByClassName("newVerb-Def"); //sfgasfg
	console.log(container);
	
	console.warn("attempting to save..");
	if (container.contains(verbdef[0])) {
		console.log(verbdef[0].value);
		console.log("woeawe");
	} else {
		console.log("not work");
	}
	/*
	WORDVERBS[n][i] = document.querySelectorAll('.newVerb-Def')[0].value;
	WORDVERBS[n][i] = document.querySelectorAll('.newVerb-1')[0].value;
	WORDVERBS[n][i] = document.querySelectorAll('.newVerb-2')[0].value;
	WORDVERBS[n][i] = document.querySelectorAll('.newVerb-3')[0].value;
	WORDVERBS[n][i] = document.querySelectorAll('.newVerb-4')[0].value;
	WORDVERBS[n][i] = document.querySelectorAll('.newVerb-Der')[0].value;
*/
	console.log(WORDVERBS);
	
}