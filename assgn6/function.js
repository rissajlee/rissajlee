// On click on PDP, make visible glaze choice 
document.getElementById("none").onclick = function() {
    document.getElementById("none").style.color = "orange";
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "black";
};

document.getElementById("sugarmilk").onclick = function() {
    document.getElementById("sugarmilk").style.color = "orange";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "black";
};

document.getElementById("vanillamilk").onclick = function() {
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "orange";
    document.getElementById("doublechoc").style.color = "black";

};

document.getElementById("doublechoc").onclick = function() {
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "orange";
};

function Bun (quantity, glaze, price) {
    this.quantity = quantity;
    this.glaze = glaze;
    this.price = price;
};

// var n = new Bun (1, "none", 5.99);

// document.getElementById("bunsCart").innerHTML = n;




function onLoad() {

    // generate a random animal when the document opens
    var auto = new Bun (1, "none", 5.99);
    console.log(auto)
    // update the page based on the animal properties
    // document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    // document.getElementById("animal-img").setAttribute("src", animal.image)
  
  };
  