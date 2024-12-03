import { LinkedList } from "./linked-list.js";
let list = new LinkedList();
console.log("append");
list.append("zakaria");
 list.append("red"); 
/* list.append("2"); */
//console.log("list all: " + list.toString());
console.log("head: " + list.getHead());
console.log("tail: " + list.getTail());

console.log("preppend");
list.prepend("unkown");
list.prepend("redouane");
list.prepend("jack");
//list.append("redouane");
//list.append("jack");
console.log("head: " + list.getHead());
console.log("tail: " + list.getTail());
console.log("list all: " + list.toString());
console.log("size: " + list.size());
console.log("value at: " + list.at(2
));