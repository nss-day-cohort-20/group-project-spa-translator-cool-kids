var translator = (function(global) {
	let german = {
		merry : "frohe",
		christmas : "weihnachten",
		and : "und",
		happy : "ein glückliches",
		new : "neues",
		year : "jahr"
	};

	global.translateToGerman = function(inputString) {
		
		let translation = inputString;

		for (var word in german) {
			let wordRegEx = new RegExp(`${word}`, 'gi');
			translation = translation.replace(wordRegEx, german[word]);
		}
		return translateToGerman;
	}

	return global;

}(translator || {}));