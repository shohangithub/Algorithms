class Node {
    data = null;
    left = null;
    right = null;
    constructor(data){
        this.data = data | null;
    }
}


class BinarySearchTree {

    root = null;
    constructor(data = null) {
       this.root = new Node(data);
    }

    addChild(root,data) {
        //console.log(root);
        if (root.data == data) {
            console.log('node already exist !');
            return;
        }

        if (data < root.data) {
            if (root.left)
                this.addChild(root.left,data); //call for recursion
            else root.left = new Node(data);
        } else {
            if (root.right)
                this.addChild(root.right,data); //call for recursion
            else root.right = new Node(data);
        }
    }

    buildTree(elements){
        
        this.root = new Node(elements[0]);

        for(let i = 1; i < elements.length;i++){
               this.addChild(this.root,elements[i]);
        }
        console.log(this.root);
    }

}

var bST = new BinarySearchTree();
bST.buildTree([17,8,75,12,9,2,27,31,5]);


export {BinarySearchTree};