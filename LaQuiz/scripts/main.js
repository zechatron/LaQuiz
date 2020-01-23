/*
// LAQUIZ DEVELOPED BY ZECHARIAH Z. FOR FJCL REGIONALS 2020
// WELCOME TO THE SOURCE CODE !
// Development of LaQuiz first began on Wednesday, October 16th, 2019. I was newer to Web Programming back then, so not everything is perfect.
// 
// jQuery would've been very helpful, but I didn't know about it at the time of first creating this. I can't be bothered to change it now, but maybe in the future idk. 

*/
const version = "Alpha v0.8";

var debug = true;
var MasterStorage = [];
var cs;

/* [ 

[<deck_name> [ [word1] ] ] 

]


*/

// KEYBOARD SHORTCUTS
document.onkeydown = function(e) {
    var e = e || window.event;
    if (e.altKey && e.which == 65) {
		$(document.activeElement).insertText("\u0101")
        return false;
    }
    if (e.altKey && e.which == 69) {
		$(document.activeElement).insertText("\u0113")
        return false;
    }
    if (e.altKey && e.which == 73) {
		$(document.activeElement).insertText("\u012B")
        return false;
    }
    if (e.altKey && e.which == 79) {
		$(document.activeElement).insertText("\u014D")

        return false;
    }
    if (e.altKey && e.which == 85) {
		$(document.activeElement).insertText("\u016B")
        return false;
    }
    if (e.which == 13) {
        $(".enter:eq(0)").click();
    }
}
function cls() {
    body = document.getElementById("body");
    while (body.hasChildNodes()) {
        body.removeChild(body.firstChild);
    }
    // debug == true && console.log("[DEBUG] Cleared Screen.");
}
function hr(attributes) {
    h = document.createElement("hr");
    h.setAttribute("class", attributes);
    body = document.getElementById("body");
    body.appendChild(h);
}
function getBackButton(destinationAsFunc, destinationAsText) {
    $("body").append($("<button class='button backBtn' onclick='" + destinationAsFunc + "'>Back to " + destinationAsText + "</button>"));
}
function getTitle(title) {
    var div = document.createElement("div");
    div.setAttribute("class", "title")
    // "div" now has the id of "title"
    var body = document.getElementById("body");
    body.appendChild(div);
    // body >> div

    $(".title").html("<center>" + title + "</center>")

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
    var txt = document.createTextNode("Remove");
    button.appendChild(txt);
    div.appendChild(button);
    $(".newWord-remove").on("click", function() {
        $(this).parent().parent().remove();
    });

}
function delNewWord() {/* DON't USE, EVEN MORE BAD CODE 
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
    var txt = document.createTextNode("Save Deck");
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
    b = document.createTextNode(version);
    a.appendChild(b);
    body = document.getElementById("body");
    body.appendChild(a);
    $("#version").html("<center>LaQuiz developed for the 2020 FJCL Regional Forum " + version + " | Tip: Press [ALT]+[A,E,I,O,U] to input macarons.</center>")
}
var wordCount = {
    nouns: 0,
    verbs: 0,

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
    getBackButton('mainMenu()', "Main Menu");
    getTitle("Create a new study deck");
    hr();
    getContainer("grid-container-2");
    getButton("New Noun", "Nouns", "newNoun()");
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
    //    debug == 1 && console.warn("[DEBUG] Variables defined; Attempting to save.");
    name = document.getElementById("name").value;
    if (name == "") {
        name = "New Deck " + deckdefaultnameid;
    }
    debug == 1 && console.log("[DEBUG] Name: " + name);
    MasterStorage[decknum][0] = name;
    // Check for noun -> IFYES --> SAVE NOUN -> DELETE NOUN ELEMENT | IFNO --> Check for verb 

    /*  debug == 1 && console.log("[DEBUG] Total Words: " + total.total);
    debug == 1 && console.log("[DEBUG] Total Number of Nouns: " + total.nouns);
    debug == 1 && console.log("[DEBUG] Total Number of Verbs: " + total.verbs);
*/
    // saving nouns
    if (body.contains(noun.container[0])) {
        i = total.nouns;
        e = -1;
        /*      debug == 1 && console.log("[DEBUG] Nouns Detected");
          debug == 1 && console.log("[DEBUG] Saving Nouns...");
*/
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
        /*      debug == 1 && console.log("[DEBUG] Verbs Detected");
          debug == 1 && console.log("[DEBUG] Saving Verbs...");
    */
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
    getBackButton("mainMenu()", "Main Menu");
    getTitle("Deck to Study")
    hr();

    getContainer("choose-container");

    if (MasterStorage.length == 0) {
        alert("You have no created decks!")
        cls();
        mainMenu();
    } else {
        delChoose = $("<button class='button choose-delete'>Delete Deck</button>");
        $("body").append(delChoose);
        delCancel = $("<button class='button choose-cancel'>Cancel</button>");
        $("body").append(delCancel);
        $(".choose-cancel").hide();

        // If the delete button is clicked
        $(".choose-delete").on("click", function() {
            $("body").css("background-color", "gray");
            $(".title-text").html("<span class='delText'>Click on the deck you wish to delete.</span>");
            $(".choose-delete").hide();
            $(".choose-button").removeAttr("onclick");

            $(".choose-button").on("click", function() {
                if (confirm("Are you sure you want to delete '" + MasterStorage[this.id][0] + "'?")) {
                    alert("'" + MasterStorage[this.id][0] + "' has been deleted.");
                    MasterStorage.splice(this.id, 1);
                    decknum--;
                    $("body").css("background-color", "aqua");
                    Existing();
                } else {
                    $("body").css("background-color", "aqua");
                    Existing();
                }
                ;
            });

            $(".choose-cancel").show().on("click", function() {
                $("body").css("background-color", "aqua");
                Existing();
            });

        });
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
    getBackButton("Existing()", "Study Deck");
    getTitle(MasterStorage[cs][0]);
    hr();
    const body = document.getElementById("body");

    a = document.createElement("div");
    a.setAttribute("id", "dashboard-container");
    a.setAttribute("class", "dashboard-container");
    body.appendChild(a);

    const dashboard_container = document.getElementById("dashboard-container");

    a = document.createElement("div");
    a.setAttribute("class", "waystostudy");
    b = document.createTextNode("Ways to study:");
    a.appendChild(b);
    dashboard_container.appendChild(a);
    a = document.createElement("button");
    a.setAttribute("class", "button write");
    b = document.createTextNode("Write");
    a.appendChild(b),
    dashboard_container.appendChild(a);
    a = document.createElement("button");
    a.setAttribute("class", "button flashcards");
    b = document.createTextNode("Flashcards");
    a.appendChild(b),
    dashboard_container.appendChild(a);
    hr("dashboard-line");
    a = document.createElement("div");
    a.setAttribute("id", "preview-container");
    a.setAttribute("class", "preview-container");
    body.appendChild(a);

    const preview_container = document.getElementById("preview-container");

    a = document.createElement("div");
    a.setAttribute("class", "deckpreviewtext");
    b = document.createTextNode(MasterStorage[cs][0] + ":");
    a.appendChild(b);
    preview_container.appendChild(a);

    $("#preview-container").append($("<button class='button deck-edit'>Edit Deck</button>"));

    if (MasterStorage[cs][2][0].length != 0) {
        for (i = 0; i < MasterStorage[cs][2].length; i++) {
            a = document.createElement("span");
            a.setAttribute("class", "prvw-verb-def");
            b = document.createTextNode(MasterStorage[cs][2][i][0]);
            a.appendChild(b);
            preview_container.appendChild(a);
            a = document.createElement("span");
            a.setAttribute("class", "prvw-verb-dash");
            b = document.createTextNode("- ");
            a.appendChild(b);
            preview_container.appendChild(a);
            a = document.createElement("span");
            a.setAttribute("class", "prvw-verb-main");
            b = document.createTextNode(MasterStorage[cs][2][i][1] + ", " + MasterStorage[cs][2][i][2] + ", " + MasterStorage[cs][2][i][3] + ", " + MasterStorage[cs][2][i][4]);
            a.appendChild(b);
            preview_container.appendChild(a);
            a = document.createElement("span");
            a.setAttribute("class", "prvw-verb-der");
            b = document.createTextNode(MasterStorage[cs][2][i][5]);
            a.appendChild(b);
            preview_container.appendChild(a);

        }
    }
    if (MasterStorage[cs][1][0].length != 0) {
        for (i = 0; i < MasterStorage[cs][1].length; i++) {

            function testfor_decl() {
                if (MasterStorage[cs][1][i][4] == "") {
                    return " ";
                } else {
                    return "(" + MasterStorage[cs][1][i][4] + ")";
                }
            }
            a = document.createElement("span");
            a.setAttribute("class", "prvw-noun-def");
            b = document.createTextNode(MasterStorage[cs][1][i][0]);
            a.appendChild(b);
            preview_container.appendChild(a);
            a = document.createElement("span");
            a.setAttribute("class", "prvw-noun-dash");
            b = document.createTextNode(testfor_decl() + " -");
            a.appendChild(b);
            preview_container.appendChild(a);
            a = document.createElement("span");
            a.setAttribute("class", "prvw-noun-main");
            b = document.createTextNode(MasterStorage[cs][1][i][1] + ", " + MasterStorage[cs][1][i][2] + ", " + MasterStorage[cs][1][i][3]);
            a.appendChild(b);
            preview_container.appendChild(a);
            a = document.createElement("span");
            a.setAttribute("class", "prvw-noun-der");
            b = document.createTextNode(MasterStorage[cs][1][i][5]);
            a.appendChild(b);
            preview_container.appendChild(a);
        }
    }
    $(".deck-edit").on("click", function() {
        cls()
        info()
        getTitle("Edit Deck | " + MasterStorage[cs][0]);
        hr();
        $("body").append("<div>")
        getContainer("grid-container-2");
        getButton("New Noun", "Nouns", "newNoun()");
        getButton("New Verb", "Verbs", "newVerb()");

        var editBtn = $("<button class='edit'>Save Changes</button>")
        $("body").append(editBtn);
	    getNameInput("");
		$(".newName").val(MasterStorage[cs][0]);
        if (MasterStorage[cs][1][0].length != 0) {
            for (i = 0; i < MasterStorage[cs][2].length; i++) {
                wordCount.id++;
                getContainerVerb("grid-container-newWord");
                getWordText("Verb Definition", "newVerb-Def");
                $(".newVerb-Def").last().val(MasterStorage[cs][2][i][0]);
                getWordNormalText("-", "newVerb-Dash");
                getWordText("1st Principal Part", "newVerb-1");
                $(".newVerb-1").last().val(MasterStorage[cs][2][i][1]);
                getWordText("2nd Principal Part", "newVerb-2");
                $(".newVerb-2").last().val(MasterStorage[cs][2][i][2]);
                getWordText("3rd Principal Part", "newVerb-3");
                $(".newVerb-3").last().val(MasterStorage[cs][2][i][3]);
                getWordText("4th Principal Part", "newVerb-4");
                $(".newVerb-4").last().val(MasterStorage[cs][2][i][4]);
                getWordText("Derivative", "newVerb-Der");
                $(".newVerb-Der").last().val(MasterStorage[cs][2][i][5]);
                buttonRemove();
            }
        }
        if (MasterStorage[cs][1][0].length != 0) {
            for (i = 0; i < MasterStorage[cs][1].length; i++) {
                wordCount.id++;
                getContainerNoun("grid-container-newWord");
                getWordText("Noun Definition", "newNoun-Def");
                $(".newNoun-Def").last().val(MasterStorage[cs][1][i][0]);
                getWordNormalText("-", "newVerb-Dash");
                getWordText("Singular Subject", "newNoun-1");
                $(".newNoun-1").last().val(MasterStorage[cs][1][i][1]);
                getWordText("Singular Possessive", "newNoun-2");
                $(".newNoun-2").last().val(MasterStorage[cs][1][i][2]);
                getWordText("Gender", "newNoun-Gen");
                $(".newNoun-Gen").last().val(MasterStorage[cs][1][i][3]);
                getWordText("Declension", "newNoun-Decl");
                $(".newNoun-Decl").last().val(MasterStorage[cs][1][i][4]);
                getWordText("Derivative", "newNoun-Der");
                $(".newNoun-Der").last().val(MasterStorage[cs][1][i][5]);
                buttonRemove();
            }
        }
        $(".edit").on("click", function() {
			
			
			
			
			// LET THE -SAVE- BEGIN!
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
            name = document.getElementById("name").value;
			MasterStorage[cs] = [[[]], [[]], [[]]]
            MasterStorage[cs][0] = name;
			
            // saving nouns
            if (body.contains(noun.container[0])) {
                i = total.nouns;
				console.log(i)
				console.log(noun.container.length);
				console.log(verb);
                e = -1;

                while (body.contains(noun.container[0])) {
                    i = i - 1;
                    e++;

                    if (noun.container[0].contains(noun.def[0])) {
                        if (e > 0) {
                            MasterStorage[cs][1].push([]);
                        }
                        MasterStorage[cs][1][e][0] = noun.def[0].value;
                        MasterStorage[cs][1][e].push(noun.lat1[0].value);
                        MasterStorage[cs][1][e].push(noun.lat2[0].value);
                        MasterStorage[cs][1][e].push(noun.gen[0].value);
                        MasterStorage[cs][1][e].push(noun.decl[0].value);
                        MasterStorage[cs][1][e].push(noun.der[0].value);
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

                while (body.contains(verb.container[0])) {
                    i = i - 1;
                    e++;

                    if (verb.container[0].contains(verb.def[0])) {
                        if (e > 0) {
                            MasterStorage[cs][2].push([]);
                        }
                        MasterStorage[cs][2][e][0] = verb.def[0].value;
                        MasterStorage[cs][2][e].push(verb.lat1[0].value);
                        MasterStorage[cs][2][e].push(verb.lat2[0].value);
                        MasterStorage[cs][2][e].push(verb.lat3[0].value);
                        MasterStorage[cs][2][e].push(verb.lat4[0].value);
                        MasterStorage[cs][2][e].push(verb.der[0].value);
                        body.removeChild(verb.container[0]);

                    } else {
                        console.error("/NULL/");
                    }
                }
            }
            alert("'" + MasterStorage[cs][0] + "' has been saved.")
            cls();
            mainMenu();
        });
    });








    // write()
    document.getElementsByClassName("write")[0].onclick = function() {

        let currentnum = 1;
        function testForNouns() {
            if (MasterStorage[cs][1][0].length == 0) {
                return ([]);
            } else {
                return (MasterStorage[cs][1])
            }
        }
        function testForVerbs() {
            if (MasterStorage[cs][2][0].length == 0) {
                return ([]);
            } else {
                return (MasterStorage[cs][2])
            }
        }
        let shuffledWrite = deckShuffle(testForNouns().concat(testForVerbs()));
        dataWrite = {
            right: 0,
            wrong: 0,
        };
        let mrDegrootIsCool = 0;
        write();

        function write() {
            f_currentnum = currentnum;
            f_shuffledWrite = shuffledWrite;
            if (mrDegrootIsCool == 0) {
                latin = shuffledWrite[currentnum - 1][1] + " " + shuffledWrite[currentnum - 1][2] + " " + shuffledWrite[currentnum - 1][3] + " " + shuffledWrite[currentnum - 1][4] + " || " + shuffledWrite[currentnum - 1][5] + " ";
                cls();
                info();
                getBackButton("dashboard()", MasterStorage[cs][0]);
                getTitle(MasterStorage[cs][0] + " | Write");
                hr();

                $('body').append($("<div class='write-container'></div>"));
                $('.write-container').append($("<div class='write-wrapper'></div>"));
                $('.write-wrapper').append($("<button class='button check-answers enter'>Check Answers</button>"));
                $('.write-wrapper').append($("<div class='write-input input'></div>"));

                $('.write-wrapper').append($("<div class='outof'>" + currentnum + "/" + shuffledWrite.length + "</div>"));

                $(".write-input").html('<input class="input fillblank-input"></input>' + ' - ' + latin);
                $(".fillblank-input").focus();
            }
            $(".check-answers").on("click", function() {
                if (currentnum - 1 != shuffledWrite.length) {
                    if ($('.fillblank-input').val() == shuffledWrite[currentnum - 1][0]) {
                        // Correct
                        $(".write-wrapper").append($("<div class='correct'></div>"));
                        $(".correct").html("<strong>Correct! :D</strong>");
                        $(".write-input").html('<font color="green">' + shuffledWrite[currentnum - 1][0] + '</font> - ' + latin);
                        currentnum++;
                        dataWrite.right++;

                        $(".check-answers").html("Continue (Or press any button)");
                        $(".check-answers").on("click", function() {
                            write();
                        });
                    } else {
                        // Incorrect
                        $(".write-wrapper").append($("<div class='incorrect'></div>"));
                        $(".incorrect").html("<strong>Oops, missed this :/</strong>");
                        $(".fillblank-input").attr("placeholder", shuffledWrite[currentnum - 1][0]);
                        $("input").css("fontSize", "medium");
                        $(".fillblank-input").val("");
                        $('.check-answers').removeClass("enter");
                        $('.write-wrapper').append($("<button class='button check enter'>Check Answer</button>"));
                        $(".input").focus();
                        $(".check").on("click", function() {
                            if ($(".fillblank-input").val() == shuffledWrite[currentnum - 1][0]) {

                                dataWrite.wrong++;
                                $(".check").addClass("check-answers");
                                $(".check").removeClass("check");

                                if (currentnum == shuffledWrite.length) {
                                    mrDegrootIsCool = 1;
                                    cls();
                                    info();
                                    getTitle(MasterStorage[cs][0] + " | Write");
                                    hr();

                                    $('body').append($("<div class='write-container'></div>"));
                                    $('.write-container').append($("<div class='write-wrapper'></div>"));
                                    $('.write-wrapper').append($("<button class='button check-answers enter'></button>"));
                                    $('.write-wrapper').append($("<div class='write-input input'></div>"));
                                    $(".write-input").css("padding-top", 35);
                                    $(".check-answers").html("Back to " + MasterStorage[cs][0]);

                                    $(".check-answers").attr("onclick", "dashboard()");

                                    var default_msg = "Out of the " + shuffledWrite.length + " terms you studied, you got <strong><font color='green'>" + dataWrite.right + " correct</font></strong>, and <strong><font color='red'>" + dataWrite.wrong + " wrong</font></strong>."
                                    if (dataWrite.right == 0) {
                                        $(".write-input").html(default_msg + "</br> You got some work to do, don't give up!");
                                    } else if (dataWrite.wrong == 0) {
                                        $(".write-input").html(default_msg + "</br> Well done, I'm proud of you!!");
                                    } else if (dataWrite.wrong > dataWrite.right) {
                                        $(".write-input").html(default_msg + "</br> You got this, keep going!");
                                    } else if (dataWrite.wrong < dataWrite.right) {
                                        $(".write-input").html(default_msg + "</br> You are going to ace this.");
                                    }
                                    ;

                                } else {
                                    currentnum++;
                                    write()
                                }
                                ;
                            } else {
                                console.log("L");
                                $(".fillblank-input").val("");
                            }
                            ;
                        });

                    }
                    ;
                } else {
                    mrDegrootIsCool = 1;
                    cls();
                    info();
                    getTitle(MasterStorage[cs][0] + " | Write");
                    hr();

                    $('body').append($("<div class='write-container'></div>"));
                    $('.write-container').append($("<div class='write-wrapper'></div>"));
                    $('.write-wrapper').append($("<button class='button check-answers enter'></button>"));
                    $('.write-wrapper').append($("<div class='write-input input'></div>"));
                    $(".write-input").css("padding-top", 35);
                    $(".check-answers").html("Back to " + MasterStorage[cs][0]);

                    $(".check-answers").attr("onclick", "dashboard()");

                    var default_msg = "Out of the " + shuffledWrite.length + " terms you studied, you got <strong><font color='green'>" + dataWrite.right + " correct</font></strong>, and <strong><font color='red'>" + dataWrite.wrong + " wrong</font></strong>."
                    if (dataWrite.right == 0) {
                        $(".write-input").html(default_msg + "</br> You got some work to do, don't give up!");
                    } else if (dataWrite.wrong == 0) {
                        $(".write-input").html(default_msg + "</br> Well done, I'm proud of you!!");
                    } else if (dataWrite.wrong > dataWrite.right) {
                        $(".write-input").html(default_msg + "</br> You got this, keep going!");
                    } else if (dataWrite.wrong < dataWrite.right) {
                        $(".write-input").html(default_msg + "</br> You are going to ace this.");
                    }
                    ;

                }

            });

        }
    }
    // flashcards() 
    document.getElementsByClassName("flashcards")[0].onclick = function() {
        cls();
        info();
        getBackButton("dashboard()", MasterStorage[cs][0]);
        getTitle(MasterStorage[cs][0] + " | Flashcards");
        hr();
        shuffledFlashcards = deckShuffle(MasterStorage[cs][1].concat(MasterStorage[cs][2]));

        currentnum = 1;

        // Creating elements, wish i had jquery
        // Contains flashcard:
        a = document.createElement("div");
        a.setAttribute("class", "flashcard-container");
        a.setAttribute("id", "flashcard-container");
        body.appendChild(a);
        const fc_container = document.getElementById("flashcard-container");
        // The flashcard itself is a button

        //		a = document.createElement("button");a.setAttribute("class", "flashcard-inside");a.setAttribute("id", "flashcard-inside");a.appendChild(b);fc_container.appendChild(a);

        // Flashcard front
        $("#flashcard-container").append($("<div class='fc-front flashcard front id='fc-front'></div>").text(shuffledFlashcards[0][0]));
        // back
        $("#flashcard-container").append($("<div class='fc-back flashcard back id='fc-back'></div>").text(shuffledFlashcards[currentnum - 1][1] + " " + shuffledFlashcards[currentnum - 1][2] + " " + shuffledFlashcards[currentnum - 1][3] + " " + shuffledFlashcards[currentnum - 1][4] + " | Derivatives: " + shuffledFlashcards[currentnum - 1][5]));

        $("#flashcard-container").flip({
            axis: 'x'
        });
        $(".flashcard-container").flip(false);

        // Flashcard counter
        a = document.createElement("span");
        a.setAttribute("class", "counter");
        a.setAttribute("id", "counter");
        b = document.createTextNode(currentnum + "/" + shuffledFlashcards.length);
        a.appendChild(b);
        fc_container.appendChild(a);
        // next + back buttons
        a = document.createElement("button");
        a.setAttribute("class", "next-btn button");
        a.setAttribute("id", "next");
        b = document.createTextNode("Next ->");
        a.appendChild(b);
        fc_container.appendChild(a);
        a = document.createElement("button");
        a.setAttribute("class", "back-btn button");
        a.setAttribute("id", "back");
        b = document.createTextNode("<- Back");
        a.appendChild(b);
        fc_container.appendChild(a);
        fc = document.getElementById("flashcard-inside");
        // Finish button
        a = document.createElement("button");
        a.setAttribute("class", "finish-btn button");
        a.setAttribute("id", "finish");
        b = document.createTextNode("Finish");
        a.appendChild(b);
        fc_container.appendChild(a);
        // Next(); 
        $(".back-btn").hide();
        $(".finish-btn").hide();
        $(".next-btn").on("click", function() {
            if (shuffledFlashcards.length > currentnum) {
                currentnum++;
                // Flips to the front:

                flip = $("#flashcard-container").data("flip-model");
                if (flip.isFlipped) {
                    $(".flashcard-container").flip(false);
                    setTimeout(function() {
                        $(".front").html(shuffledFlashcards[currentnum - 1][0]);
                        $(".back").html(shuffledFlashcards[currentnum - 1][1] + " " + shuffledFlashcards[currentnum - 1][2] + " " + shuffledFlashcards[currentnum - 1][3] + " " + shuffledFlashcards[currentnum - 1][4] + " | Derivatives: " + shuffledFlashcards[currentnum - 1][5])
                    }, 200);
                } else {
                    $(".front").html(shuffledFlashcards[currentnum - 1][0]);
                    $(".back").html(shuffledFlashcards[currentnum - 1][1] + " " + shuffledFlashcards[currentnum - 1][2] + " " + shuffledFlashcards[currentnum - 1][3] + " " + shuffledFlashcards[currentnum - 1][4] + " | Derivatives: " + shuffledFlashcards[currentnum - 1][5])
                }
                $("#counter").html(currentnum + "/" + shuffledFlashcards.length);

                if (shuffledFlashcards.length == currentnum) {
                    $(".next-btn").hide();
                    $(".finish-btn").show();
                }
                if (currentnum < shuffledFlashcards.length) {
                    $(".next-btn").show();
                }
                if (currentnum == 1) {
                    $(".back-btn").hide();
                }
                if (shuffledFlashcards.length != 1) {
                    $(".back-btn").show();
                }
            }
        });
        $(".back-btn").on("click", function() {
            if (currentnum != 1) {
                currentnum--;
                // Flips to the front:

                flip = $("#flashcard-container").data("flip-model");
                if (flip.isFlipped) {
                    $(".flashcard-container").flip(false);
                    setTimeout(function() {
                        $(".front").html(shuffledFlashcards[currentnum - 1][0]);
                        $(".back").html(shuffledFlashcards[currentnum - 1][1] + " " + shuffledFlashcards[currentnum - 1][2] + " " + shuffledFlashcards[currentnum - 1][3] + " " + shuffledFlashcards[currentnum - 1][4] + " | Derivatives: " + shuffledFlashcards[currentnum - 1][5])
                    }, 200);
                } else {
                    $(".front").html(shuffledFlashcards[currentnum - 1][0]);
                    $(".back").html(shuffledFlashcards[currentnum - 1][1] + " " + shuffledFlashcards[currentnum - 1][2] + " " + shuffledFlashcards[currentnum - 1][3] + " " + shuffledFlashcards[currentnum - 1][4] + " | Derivatives: " + shuffledFlashcards[currentnum - 1][5])
                }
                $("#counter").html(currentnum + "/" + shuffledFlashcards.length);

                if (currentnum < shuffledFlashcards.length) {
                    $(".next-btn").show();
                    $(".finish-btn").show();
                }
                if (shuffledFlashcards.length != 1) {
                    $(".back-btn").show();
                }
                if (currentnum == 1) {
                    $(".back-btn").hide();
                }
            }
        });
        $(".finish-btn").on("click", function() {
            dashboard();
        });

    }
}

function deckShuffle(arr) {
    let newPos, temp;
    for (i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
    }
    return arr;
}
;