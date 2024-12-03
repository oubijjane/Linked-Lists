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
list.pop();

console.log("list all: " + list.toString());
console.log("size: " + list.size());

console.log("contain zakaria: " + list.contains("jack"));
console.log("index of unkown: " + list.find("unkown"));
console.log("inserting at: ")
list.insertAt("test", 2);
console.log("head: " + list.getHead());
console.log("tail: " + list.getTail());
console.log("list all: " + list.toString());
console.log("size: " + list.size());

console.log("remove at: ")
list.removeAt(1);
console.log("head: " + list.getHead());
console.log("tail: " + list.getTail());
console.log("list all: " + list.toString());
console.log("size: " + list.size());