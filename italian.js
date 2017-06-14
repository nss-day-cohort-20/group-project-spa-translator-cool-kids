var translator = (function(global){

//private variable
let italian ={merry:"buon", christmas:"natale", and:"e", happy:"felice", new:"nuovo", year:"anno"};

//turn this object into 2 equal length arrays
let englishArray =[];

for(var key in italian){
	englishArray.push(key);
}

let italianArray=[];
for (var value in italian){
	italianArray.push(italian[value]);
}

console.log ("italianArray",italianArray);
console.log ("englishArray",englishArray);

var italianTranslation= "";

global.translateToItalian=function(inputString){
	for(var i=0; i<englishArray.length; i++){
		italianTranslation += inputString.toLowerCase.replace(/englishArray[i]/g, italianArray[i] );

		}

 	return italianTranslation;
}

 return global;

 }(translator));

