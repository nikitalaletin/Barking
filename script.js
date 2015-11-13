/**
 * Created by MLalietin on 13.11.15.
 */
function Animal(name) {
    this.name = name;
}

Animal.prototype.getName = function(name) {
    console.log(this.name);
};

function Dog(name) {
    Animal.apply(this, arguments);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function(name) {
    console.log( "Dog "+this.name+" is barking");
};

var dog = new Dog ('Aban');

dog.getName();
dog.bark();