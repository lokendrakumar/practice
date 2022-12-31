class Node {
    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }
}


class Tree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }

    
}


const tree1 = new Tree()
tree1.insert(25)
tree1.insert(25)
tree1.insert(22)
tree1.insert(26)
console.log(tree1)
