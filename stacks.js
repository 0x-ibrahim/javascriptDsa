/* Take example of stack of books, the last book you put on a stack is the first book you take out of a stack; 
another example of a stack is browsers back button using the push method
functions: push, pop, peek- displaying the top element of a stack, length or size for dertermining how many elements 
are there on a stack, A nice feature of javascript is that the array object already has the function we need in other
to use it as a stack; thus you can just use an array as a stack 
palindrome : A word that its spelling is the same both forward and backward
*/

var letters = [];

var word = "freeCodeCamp";

var rword = "";

for (i = 0; i < word.length; i++){
    letters.push(word[i])
}

for (var i = 0; i < word.length; i++) {
    rword+=(word[i]);
}

for (var i= 0; i < word.length; i++){
    rword += letters.pop();
}

if (rword == word){
    console.log(word + " is a palindrome")
}
else {
    console.log(word + " is not a palindrome")
}

/* The sets Data structures is kind of like an array except there are no duplicate items and the values are in no
particular order 
    The typical use of a set is to check the presence of an item
*/ 

function mySet() {
    var collection = [];

    this.has = function(element){
        return (collection.indexOf(element)!==-1);
    };
    this.values = function () {
        return collection;
    };
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }
    this.remove = function (element){
        if (this.has(element )){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true; 
        }
        return false;
    };
    this.size = function(){
        return collection.length
    };
    this.size = function(){
        return collection.length;
    };
    this.union = function (otherSet) {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(
            function(e){
                unionSet.add(e);
            }
        );
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
    }
}