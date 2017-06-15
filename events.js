//var events = (function() {

let btn = document.getElementById('translateBtn');
let inputText = document.getElementById('textInput');
let outputText = document.getElementById('output');
let languageSelection = document.getElementById('languageChoice');

function getEnglish(){
   let userString = textInput.value;
    return userString;
 }

function getLanguageChoice(){
    let langChoice= languageChoice.value;
   return langChoice;
}

function translateHandler(clickEvent) {
	console.log(clickEvent);
let langChoice=getLanguageChoice();
let inputText= getEnglish();

console.log ("langChoice",langChoice);
console.log ("inputText",inputText);
	if ( langChoice === 'German') {
		outputText.innerHTML = translator.translateToGerman(inputText);
	} else if (langChoice === 'Italian') {
		outputText.innerHTML = translator.translateToItalian(inputText);
	} else if (langChoice === 'Spanish') {
		outputText.innerHTML = translator.translateToSpanish(inputText);
	} else {
		alert('Please select a language and/or type a christmas greeting');
	}
}

btn.addEventListener('click', translateHandler);

//}());

// TODO : wrap this file in a iife appropriately