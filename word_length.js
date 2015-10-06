function word_length (sentence) {
	// body...
	var words = sentence.split("");

	var average = 0;
	var sum = 0;

	for (var i = 0; i < words.length; i++) {

		sum = sum + words[i].length;
	 	
	 }; 
	 
	 average = sum/words.length;
	 return [Math.floor(average), Math.ceil(average)];
}