
var translator = (function(global){

//private variable
let italian ={merry:"buon", christmas:"natale", and:"e", happy:"felice", new:"nuovo", year:"anno"};

//turn this object into 2 equal length arrays


global.translateToItalian=function(inputString){

let translation = inputString;

	for(var word in italian){
		let wordRegEx = new RegExp(`${word}`, 'gi');
		translation= translation.replace(wordRegEx, italian[word]);
		}

 	return translation;
}

 return global;


}(translator || {}));

