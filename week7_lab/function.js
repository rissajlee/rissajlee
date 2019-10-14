function whale(name, age) {
    this.name = name;
    this.age = age;
    this.type = "whale";
    this.image ="whale.png";
}

function sheep(name,age) {
    this.name = name;
    this.age = age;
    this.type = "sheep";
    this.image ="sheep.png";
}

function chicken(name, age) {
    this.name = name;
    this.age = age;
    this.type = "chicken";
    this.image ="chicken.png";
}

var animal = [new whale("whaley", 5), new whale("mary",1), new whale("run", 2)];

var animal2 = [new whale("junior", 2), new sheep("blue", 3), new chicken("gary",80)];

var generateRandomIndex = function (maxIndex) {
    var random = Math.floor(Math.random()*maxIndex);
    console.log(random);
}

var generateRandomName = function (animal) {
    var randomIndex = generateRandomIndex(animal.length);
    var randomAnimal = (animal[randomIndex]).name;
    console.log(randomAnimal);
    // return randomAnimal.name;
}

var generateRandomAge = function (animal) {
    var randomIndex = generateRandomIndex(animal.length);
    console.log((animal[randomIndex]).age);
}

var generateRandomAnimal = function (animals) {
    var randomIdx = generateRandomIndex(animals.length);
    var randomAnimal = animal[randomIdx];
    if (randomAnimal instanceof "whale") {
        return new whale(generateRandomName(animals.length), generateRandomAge(animals.length));
    }
    if (randomAnimal instanceof "sheep") {
        return new sheep(generateRandomName(animals.length), generateRandomAge(animals.length));
    }
    if (randomAnimal instanceof "chicken") {
        return new chicken(generateRandomName(animals.length), generateRandomAge(animals.length));
    }
}