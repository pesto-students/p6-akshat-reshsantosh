// const { sub } = require("server/router");

function person(name){

  this.name = name;

}

function Teacher(name, subject){
  person.call(this, name);
  this.subject = subject;
  // return this.subject;

}

person.prototype.hisname = function(){
  Teacher.prototype.sub = this.subject;
  return this.name + " is now teaching "+ this.subject;
}


Teacher.prototype = new person()
var std = new Teacher("adam", "inheritance");
console.log(std.hisname())