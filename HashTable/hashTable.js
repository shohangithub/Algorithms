

class HashTable {

    table = new Array(137);

    //with collision
    hashFunction(data){
        let sum = 0;
        for(let i = 0; i < data.length;i++){
             sum += data.charCodeAt(i); 
        }
        return sum % this.table.length;
    }

    //with collision
    betterHashFunction(data){
        let cnst = 37;
        let sum = 0;
        for(let i = 0; i < data.length;i++){
             sum += cnst * sum + data.charCodeAt(i); 
        }
        return sum % this.table.length;
    }


    put(data){
        //var key = this.hashFunction(data);
        var key = this.betterHashFunction(data);
        this.table[key] = data;
    }

    showDistro(){
        
        for(let i = 0; i < this.table.length;i++){
            
            if(this.table[i] != undefined){
                console.log(' |---------------| ')
               console.log(` ${i} : ${this.table[i]} `);
               
            } 
       }
    }

}
//// calling 
//import {HashTable} from '/HashTable/hashTable.js';

const data =['Shohan','Zakir','Karim','Rahim','Raymond','Clayton'];

let ht = new HashTable();

data.forEach(element => {
    ht.put(element);
});

ht.showDistro();

export {HashTable};