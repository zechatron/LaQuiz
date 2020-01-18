
// To Save:
setInterval(function() {
	localStorage.setItem('masterstorage', JSON.stringify(MasterStorage));
	localStorage.setItem('decknum', JSON.stringify(decknum));
	debug == true && console.log("[DEBUG // SAVE] Saved to Local Storage.")
}, 30000)
window.onbeforeunload = function() {
localStorage.setItem('masterstorage', JSON.stringify(MasterStorage));
localStorage.setItem('decknum', JSON.stringify(decknum));
}
// To Load:
window.onload = function() {
MasterStorage = JSON.parse(localStorage.getItem('masterstorage'));
decknum = JSON.parse(localStorage.getItem('decknum'));

if (MasterStorage == null && decknum == null) {
	console.log("ssssss");
	MasterStorage = [];
	decknum = -1;
} 
}