// Binar Tree


function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
  
}


Node.prototype.addNode = function(val){
    if(this.value===null){
      return this.value = val;
      } else{
      if(this.value<val){
        if(this.right===null){
         return this.right = new Node(val);
        } else {
          return this.right.addNode(val);
        }
      } else if(this.value>val){
        if(this.left===null){
         return this.left = new Node(val);
        } else {
          return this.left.addNode(val);
        }
        
      }
    }
  }
