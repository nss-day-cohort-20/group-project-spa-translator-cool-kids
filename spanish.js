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
		console.log(inputString);
		for (var word in spanish) {
			let wordRegEx = `/${word}/gi`;
			console.log(wordRegEx);
			inputString = inputString.replace(wordRegEx, word);
		}
		return inputString;
	}

	return global

}(translator));