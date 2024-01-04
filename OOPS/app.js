// this file is part of OOPS taught in backend Development

class Mammal {
    constructor(name){
        this.name = name;
        this.type = 'warm-blooded';
    }
    eat(){
        console.log('I can eat')
    }
}

class Dog extends Mammal {
    constructor(name){
        super(name);
    }
    bark(){
        console.log('Woof..Woof..')
    }
}

class Cat extends Mammal {
    constructor(name){
        super(name);
    }
    meow(){
        console.log('Meow...Meow...')
    }
}