// Round 1
const lengths = (stringArray) => {

	console.log(stringArray);

	let wordLength = [];

	for (i = 0; i < stringArray.length; i++){
		if (stringArray[i].length > wordLength.length){
			wordLength = stringArray[i].length
		}
	}
	return wordLength
}

lengths(['hi', 'bye', 'look'])

// Round 2
const transmogrifier = (x, y, z) =>{
	let transmogrified = Math.pow(x * y, z);
		console.log(transmogrified)
	return "the transmogrified result of " + x +" " + y +" "+ " and " + z + " is " +  transmogrified
};

transmogrifier(5, 4, 3);
transmogrifier(13, 12, 5);
transmogrifier(42, 13, 7);

// Round 3
const toonify = (accent, sentence) => {	
	if (accent === "daffy" ){
		return sentence.split('s').join('th');
	}
	if (accent === "elmer" ){
		return sentence.split('r').join('w');
	}
};

toonify("daffy", "so you smell like sausage");
toonify("elmer", "What are you doing you silly rabbit?");

// Round 4
const wordReverse = (string) => {
	return string.split(' ').reverse().join(' ');
};

wordReverse("Now I know what a TV dinner feels like");

// Round 5
const letterReverse = (string) => {
	const x = string.split(' ');
	console.log(x);
	for (i = 0; i < x.length; i++){
		x[i] = x[i].split('').reverse().join('');
		console.log(x[i]);
	}
	return x.join(' ')
};
letterReverse("Now I know what a TV dinner feels like");

// Round 6
const longest = (arrayStr) => {
	let longestWord = '';
	for (let i = 0; i < arrayStr.length; i++){
		if (arrayStr[i].length > longestWord.length){
			longestWord = arrayStr[i];
		} 
	}
	console.log(longestWord);

};

longest(["oh", "good", "grief", "fiver", "12345", "seventy", "eighty1"]);

// Final Round 
const wordReverse = (string) => {
	return string.split(' ').reverse().join(' ');
};

const repMaster = (input, myFunction) => {
	const newString = " proves that I am the rep MASTER!"
	return myFunction(input) + newString;

};

repMaster("Never give your heart to a blockhead", wordReverse);






