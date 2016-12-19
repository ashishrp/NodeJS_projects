'use strict'
var events=require('events');
var eventEmitter=new events.EventEmitter();
var listner1=()=>{console.log("listner 1");}
var listner2=()=>{console.log("listner 2");}
eventEmitter.addListener('connection', listner1);
var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+"Listner(s) listening to connection event");
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listner1);
eventEmitter.addListener('connection', listner2);
//console.log('lisnter 1 removed');
eventEmitter.emit('connection');
eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners +"Listner(s) listening to connection event");

console.log("end of code");
