/* javascript object */

class Book{
	constructor(title, author, year){
  	this.title = title;
    this.author = author;
    this.year = year;
  }
  
  getInfo(){
  	return this.title + " was written by " + this.author + " in " + this.year;
  }
}

var book1 = new Book('Hello', 'kevin', 1004);

class Magazine extends Book{
	constructor(title, author, year, month){
  	super(title, author, year);
    this.month = month;
  }
  
  getInfo(){
  	return this.title + " was written by " + this.author + " in " + this.year + " at " + this.month;
  }
}

var mag1 = new Magazine('nature', 'michael', 1004 ,1);


function Person(name, age, job){
	this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype.toString = function(){
	return this.name + " is " + this.age + " and his job is " + this.job;
}

var person = new Person('stone', 24, 'software engineer');

function Writer(name, age, job){
	Person.call(this, name, age, job);
}
Writer.prototype = new Object(Person.prototype);
var writer = new Writer('LuXun', 30, 'Writer');
console.log(writer.name);
console.log(writer.toString());
