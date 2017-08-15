var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var numberOfGuess = 1;
    while(max>=min){
    guess = Math.floor((max + min)/2);
    
    if(array[guess]===targetValue){
        console.log(numberOfGuess);
        return guess;
    } else if(array[guess]< targetValue){
        min = guess + 1;
    } else if(array[guess]> targetValue){
        max = guess - 1;
        
        
    }
    console.log(guess);
    numberOfGuess++;
    
    
    }
    
    


	return -1;
};
