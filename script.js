import { LinkedList } from "./linked-list.js";
let list = new LinkedList();
console.log("append");
list.append("zakaria");
list.append("redouane");
list.append("jack");
console.log("head: " + list.getHead());
console.log("tail: " + list.getTail());

console.log("preppend");
list.prepend("unkown");
//list.append("redouane");
//list.append("jack");
console.log("head: " + list.getHead());
console.log("tail: " + list.getTail());
