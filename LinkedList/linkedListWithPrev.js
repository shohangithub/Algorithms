
//node model class
class Node {
    constructor(data = null, next = null,prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    // print the list
    print() {
        if (this.head == null) {
            console.log('Linked List is empty');
            return;
        }


        let itr = this.head;
        let llStr = '';

        while (itr) {
            llStr += itr.data + '-->'
            itr = itr.next;
        }

        console.log(llStr);
        console.log(this.head);

    }

    //get list size
    getSize() {
        let count = 0;
        let itr = this.head;
        while (itr) {
            count += 1;
            itr = itr.next;
        }
        return count;
    }

    //insert data on the begining
    insertAtBegin(data) {
        let node = new Node(data, this.head,null);

        this.head = node;
        //console.log(this.head)
    }

    // insert at the end node
    insertAtEnd(data) {
        if (this.head == null) {
            this.head = new Node(data, null,null);
            return;
        }

        let itr = this.head;
        while (itr.next) {
            itr = itr.next;
        }

        itr.next = new Node(data, null,itr);
    }

    // insert at the target node
    insertAtIndex(data,index) {
       
        if(index < 0 || index > this.getSize()){
            console.log('Invalid input index.');
            return;
        }
        
        if(index == 0 ){
            this.insertAtBegin(data);
            return;
        }

        let count = 0;
        let itr = this.head;
        while(itr){
           
            if(count == index - 1){ 
                itr.next = new Node(data,itr.next,itr);
             break;
            }
             count += 1;
             itr = itr.next;
        }
    }


    // insert after the target value
    insertAfterValue(targetValue,insertValue) {
        let itr = this.head;
        while(itr){
            if(itr.data == targetValue){ 
                itr.next = new Node(insertValue,itr.next,itr);
             break;
            }
             itr = itr.next;
        }
    }

    //insert values into linked list
    insertValues(data){
        data.forEach(element => {
            this.insertAtEnd(element);
        });
    }

    // remove the target node
    removeFromIndex(index) {
       
        if(index < 0 || index > this.getSize()){
            console.log('Invalid input index.');
            return;
        }
        
        if(index == 0){
           this.head = this.head.next;
            return;
        }

        let count = 0;
        let itr = this.head;
        while(itr){
            if(count == index - 1){ 
                itr.next = itr.next.next;
             break;
            }
             count += 1;
             itr = itr.next;
        }
    }

     // remove the target value
     removeByValue(targetValue) {
        let itr = this.head;
        while(itr){
            if(itr.value == targetValue){ 
                itr.next = itr.next.next;
             break;
            }
             itr = itr.next;
        }
    }


}

//// calling 

//import {LinkedList} from '/LinkedList/linkedListWithPrev.js'
let ll = new LinkedList();
ll.insertAtBegin(5);
ll.insertValues([77,89,55]);
ll.insertAtEnd(4);
ll.print();
console.log(ll.getSize());
ll.insertAtIndex(88,2);
ll.print();
ll.removeFromIndex(1);
ll.print();
ll.insertAfterValue(89,95);
ll.print();
ll.removeByValue(95);
ll.print();
export { LinkedList };