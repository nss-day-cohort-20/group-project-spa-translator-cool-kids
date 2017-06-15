var translator = (function(global) {
	let spanish = {
		merry : "feliz",
		christmas : "navidad",
		and : "y",
		happy :"próspero",
		new :"nuevo",
		year :"año"
	};

	global.translateToSpanish = function(inputString) {

		let translation = inputString;

		for (var word in spanish) {
			let wordRegEx = new RegExp(`${word}`, 'gi');
			console.log(translation);
			translation = translation.replace(wordRegEx, spanish[word]);
		}

		return translation;
	}

	return global

}(translator || {}));

// passing "translator || {}" as the immediate invocation argument gets rid of the need for the main.js and allows more flexible loading
// see "loose augmentation" at http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// also looked at speech synthesis here: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// and here: https://codepen.io/matt-west/pen/wGzuJ