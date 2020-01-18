// LAQUIZ CREATED BY ZECHARIAH ZHONG FOR FJCL REGIONALS 2020
// WELCOME TO THE SOURCE CODE. 
// Development of LaQuiz first began on Wednesday, ‎October ‎16, ‎2019. I was newer to Web Programming back then, so not everything is very optimized.
// 
// jQuery would've been very helpful, but I didn't know about it at the time of first creating this. I can't be bothered to change it now, but maybe in the future idk. 

const version = "v0.7.0 Beta";
var debug = true;
var MasterStorage = [];
var cs;

/* [ 

[<deck_name> [ [word1] ] ] 

]


*/

function cls() {
    body = document.getElementById("body");
    while (body.hasChildNodes()) {
        body.removeChild(body.firstChild);
    }
    // debug == true && console.log("[DEBUG] Cleared Screen.");
}
function hr() {
    h = document.createElement("hr");
    body = document.getElementById("body");
    body.appendChild(h);
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

    function getContainer(container) {}
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

function getButton(text, grid, func, attributes) {
    var div = document.createElement("div");
    div.setAttribute("class", grid);
    // "div" has class of "grid-item"
    var container = document.getElementById("grid-container");
    container.appendChild(div);
    // grid-container >> grid-item

    if (attributes == undefined) {
        var button = document.createElement("button");
        button.setAttribute("class", "button");
        button.setAttribute('onclick', func);
    } else {
        var button = document.createElement("button");
        button.setAttribute("class", attributes);
        button.setAttribute('onclick', func);
    }
    var txt = document.createTextNode(text);
    button.appendChild(txt);
    div.appendChild(button);

}
function buttonRemove() {
    var div = document.createElement("div");
    div.setAttribute("class", "newWord-Remove");
    div.setAttribute("id", "newWord-Remove");
    // "div" has class of "grid-item"
    var container = document.getElementById("grid-container-newWord-" + wordCount.id);
    container.appendChild(div);
    // grid-container >> grid-item

    var button = document.createElement("button");
    button.setAttribute("class", "newWord-remove");
    button.setAttribute("id", "delButton");
    button.setAttribute('onclick', "delNewWord()");
    var txt = document.createTextNode("Remove");
    button.appendChild(txt);
    div.appendChild(button);

}
// fix
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
function getNameInput(text) {
    var newtext = document.createElement("input");
    newtext.setAttribute("class", "newName");
    newtext.setAttribute("id", "name");
    newtext.setAttribute("placeholder", text)

    var container = document.getElementById("body");
    container.appendChild(newtext);
}
function info() {
    a = document.createElement("div");
    a.setAttribute("id", "version");
    b = document.createTextNode("LaQuiz developed by Zechariah Zhong for the 2020 FJCL Regionals " + version);
    a.appendChild(b);
    body = document.getElementById("body");
    body.appendChild(a);
}
var wordCount = {
    nouns: 0,
    verbs: 0,
    adj: 0,
    adv: 0,

    id: 0
}

function mainMenu() {
	cls();
    getTitle("LaQuiz");
	hr();
    getContainer("grid-container");
    getButton("Study Existing Decks", "Existing", "Existing()");
    getButton("New Study Deck", "NewDeck", "NewDeck()");
    info();
}
mainMenu();

function NewDeck() {
    cls();
    getSaveButton();
    getTitle("Create a new study deck");
	hr();
    getContainer("grid-container-2");
    getButton("New Nown", "Nouns", "newNoun()");
    getButton("New Verb", "Verbs", "newVerb()");
    getNameInput("Name of this deck");
    info();
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

    //	console.log("[DEBUG] New noun.");
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
    buttonRemove();

    //	console.log("[DEBUG] New verb.");
}

function newAdj() {
    getContainer("grid-container-newAdj");

    console.log("[DEBUG] New adj.");
}
function newAdv() {
    getContainer("grid-container-newAdv");

    console.log("[DEBUG] New adv.");
}
// DECK NUM VARIABLE STARTS COUNTING AT 0!!!!!!!!!!!!!
decknum = -1;
function newSave() {
    var noun = {
        container: document.getElementsByClassName("noun"),
        def: document.getElementsByClassName("newNoun-Def"),
        lat1: document.getElementsByClassName("newNoun-1"),
        lat2: document.getElementsByClassName("newNoun-2"),
        gen: document.getElementsByClassName("newNoun-Gen"),
        decl: document.getElementsByClassName("newNoun-Decl"),
        der: document.getElementsByClassName("newNoun-Der")
    }
    var verb = {
        container: document.getElementsByClassName("verb"),
        def: document.getElementsByClassName("newVerb-Def"),
        lat1: document.getElementsByClassName("newVerb-1"),
        lat2: document.getElementsByClassName("newVerb-2"),
        lat3: document.getElementsByClassName("newVerb-3"),
        lat4: document.getElementsByClassName("newVerb-4"),
        der: document.getElementsByClassName("newVerb-Der"),

    }
    var total = {
        total: noun.container.length + verb.container.length,
        nouns: noun.container.length,
        verbs: verb.container.length,

    }

    /////////////////////////////////////////
    MasterStorage.push([[[]], [[]], [[]]])
    decknum++;
    deckdefaultnameid = 1 + decknum;
    body = document.getElementById("body");
    debug == 1 && console.warn("[DEBUG] Variables defined; Attempting to save.");
    name = document.getElementById("name").value;
    if (name == "") {
        name = "New Deck " + deckdefaultnameid;
    }
    debug == 1 && console.log("[DEBUG] Name: " + name);
    MasterStorage[decknum][0] = name;
    // Check for noun -> IFYES --> SAVE NOUN -> DELETE NOUN ELEMENT | IFNO --> Check for verb 

    debug == 1 && console.log("[DEBUG] Total Words: " + total.total);
    debug == 1 && console.log("[DEBUG] Total Number of Nouns: " + total.nouns);
    debug == 1 && console.log("[DEBUG] Total Number of Verbs: " + total.verbs);

    // saving nouns
    if (body.contains(noun.container[0])) {
        i = total.nouns;
        e = -1;
        debug == 1 && console.log("[DEBUG] Nouns Detected");
        debug == 1 && console.log("[DEBUG] Saving Nouns...");
        while (body.contains(noun.container[0])) {
            i = i - 1;
            e++;

            if (noun.container[0].contains(noun.def[0])) {
                if (e > 0) {
                    MasterStorage[decknum][1].push([]);
                }
                MasterStorage[decknum][1][e][0] = noun.def[0].value;
                MasterStorage[decknum][1][e].push(noun.lat1[0].value);
                MasterStorage[decknum][1][e].push(noun.lat2[0].value);
                MasterStorage[decknum][1][e].push(noun.gen[0].value);
                MasterStorage[decknum][1][e].push(noun.decl[0].value);
                MasterStorage[decknum][1][e].push(noun.der[0].value);
                body.removeChild(noun.container[0]);

            } else {
                console.warn("doent work");
            }
        }

        // saving verbs
    }
    if (body.contains(verb.container[0])) {
        i = total.verbs;
        e = -1;
        debug == 1 && console.log("[DEBUG] Verbs Detected");
        debug == 1 && console.log("[DEBUG] Saving Verbs...");
        while (body.contains(verb.container[0])) {
            i = i - 1;
            e++;

            if (verb.container[0].contains(verb.def[0])) {
                if (e > 0) {
                    MasterStorage[decknum][2].push([]);
                }
                MasterStorage[decknum][2][e][0] = verb.def[0].value;
                MasterStorage[decknum][2][e].push(verb.lat1[0].value);
                MasterStorage[decknum][2][e].push(verb.lat2[0].value);
                MasterStorage[decknum][2][e].push(verb.lat3[0].value);
                MasterStorage[decknum][2][e].push(verb.lat4[0].value);
                MasterStorage[decknum][2][e].push(verb.der[0].value);
                body.removeChild(verb.container[0]);

            } else {
                console.error("/NULL/");
            }
        }
    }
    alert("'" + MasterStorage[decknum][0] + "' has been saved.")
    cls();
    mainMenu();
}
function Existing() {
    cls();
    info();
    getTitle("Deck to Study")
	hr();
	
    getContainer("choose-container");
    if (MasterStorage.length == 0) {
        alert("You have no created decks!")
        cls();
        mainMenu();
    } else {
        var i;
        for (i = 0; i < MasterStorage.length; i++) {

            var div = document.createElement("div");
            div.setAttribute("class", "btn");
            var container = document.getElementById("grid-container");
            container.appendChild(div);
            var button = document.createElement("button");
			button.setAttribute('id', i);
            button.setAttribute("class", "choose-button button");
            button.setAttribute('onclick', "cs = this.id; dashboard()");
            
            var txt = document.createTextNode(MasterStorage[i][0]);
            button.appendChild(txt);
            div.appendChild(button);
        }
    }
}
function dashboard() {
	cls()
	info()
	getTitle(MasterStorage[cs][0]);
	
}