function shortest_word(sentence){
	
	var words = sentence.split(" ");
	//var short = null;
	var short = words[0];

        for(var i = 0 ; i < words.length ; i++)
	{	
		if(words[i].split("").length < short.split("").length){
			
 			short =[words[i],words[i].length];
		}
	}
	
	return short+":"+ short.length;
  }
