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
			translation = translation.replace(wordRegEx, spanish[word]);
		}

		return translation;
	}

	return global

}(translator));