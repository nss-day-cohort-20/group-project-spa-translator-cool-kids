var translator = (function(object){

//private variable
let italian ={merry:"buon", christmas:"natale", and:"e", happy:"felice", new:"nuovo", year:"anno"};


var italianTranslation= "";

object.translateToItalian=function(inputString){
for(key in italian){

 italianTranslation += inputString.toLowerCase.replace(/merry/g, "Buon" );

}

	return italianTranslation;
}

return object;
}(translator || {}));