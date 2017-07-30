// BINARY TREE
  //NODE CREATOR
function Node(val){
  this.value = val;
  this.left = null;
  this.right = null;
  
}

  //METHOD TO ADD NODE
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

//BINARY SEARCH ALGORITHM

  //METHOD TO SEARCH THE NODE VALUE
Node.prototype.search = function(val){
  if(this.value === null){
    return "Not Found";
  } else if(this.value === val){
    return "Value Found";
  } else {
    if(this.value>val){
      if(this.left === null){
        return "Not Found";
      } else if(this.left.value === val){
        return "Value Found";
      } else {
       return this.left.search(val);
      }
    } else if (this.value<val){
      if(this.right === null){
        return "Not Found";
      } else if(this.right.value === val){
        return "Value Found";
      } else {
       return this.right.search(val);
      }
    }
  }
}
