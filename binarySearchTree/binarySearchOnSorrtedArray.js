var doSearch = function(array, targetValue) {
	var min = 0;
	var max = array.length - 1;
    var guess;
    var guesscount=0;
    while(min <= max){
        var count =1;
        guess = Math.floor((max+min)/2);
        
        
        guesscount++;
        if(array[guess]===targetValue){
          
           return guess;
         
        }else if(array[guess]<targetValue){
            min= guess+1;
        }else {
            max = guess-1;
        }
        
        
    }
    


	return -1;
};
