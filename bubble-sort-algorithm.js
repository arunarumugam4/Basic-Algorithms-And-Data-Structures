// bubble sort algorithm 


function bubbleSortAscendingOrder(items){
    let length = items.length;
    // loop throught the items
    for(let i in items){
        
        // loop again
        for (let j=0; j<length-i-1;j++){
        	if(items[j]>items[j+1]){
        		let temp = items[j];
        		items[j] = items[j+1];
        		items[j+1] = temp;
        	}
        }

    }


   // sorted items
   console.log(items)
}



