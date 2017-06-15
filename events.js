//var events = (function() {

let btn = document.getElementById('translateBtn');
let inputText = document.getElementById('textInput');
let outputText = document.getElementById('output');
let languageSelection = document.getElementById('languageChoice');

function translateHandler(clickEvent) {
	console.log(clickEvent);
	// if (languageSelection === 'German') {
	// 	outputText.innerHTML = translator.translateToGerman(inputText.value);
	// } else if (languageSelection === 'Italian') {
	// 	outputText.innerHTML = translator.translateToItalian(inputText.value);
	// } else if (languageSelection === 'Spanish') {
		outputText.innerHTML = translator.translateToSpanish(inputText.value);
	// } else {
	// 	alert('Please select a language and/or type a christmas greeting');
	// }
}

btn.addEventListener('click', translateHandler);

//}());

// TODO : wrap this file in a iife appropriately