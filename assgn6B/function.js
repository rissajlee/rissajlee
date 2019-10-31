// On click on PDP, make visible glaze choice 
// Referenced https://www.w3schools.com/jsref/met_element_setattribute.asp
document.getElementById("none").onclick = function() {
    document.getElementById("none").style.color = "orange";
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "black";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/original.jpg")
};

document.getElementById("sugarmilk").onclick = function() {
    document.getElementById("sugarmilk").style.color = "orange";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "black";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/originalSugar.jpg")
};

document.getElementById("vanillamilk").onclick = function() {
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "orange";
    document.getElementById("doublechoc").style.color = "black";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/originalVanilla.jpg")
};

document.getElementById("doublechoc").onclick = function() {
    document.getElementById("sugarmilk").style.color = "black";
    document.getElementById("none").style.color = "black";
    document.getElementById("vanillamilk").style.color = "black";
    document.getElementById("doublechoc").style.color = "orange";
    document.getElementById("originalPDPimage").setAttribute("src", "assets/originalChoc.jpg")
};


// Bun constructor
function Bun (quantity, glaze, price) {
    this.quantity = quantity;
    this.glaze = glaze;
    this.price = price;
}


// Updates price in PDP
function updatePDPTotal (quantity) {
    document.getElementById("originalPDPtotal").innerHTML = "Total&emsp;&emsp;$" + (quantity*3);
}

// Checks which glaze has been selected
function checkGlaze() {
    if (document.getElementById("none").style.color == "orange") {
        var glaze = "none"; 
    } else if (document.getElementById("sugarmilk").style.color == "orange") {
        var glaze = "sugarmilk";
    } else if (document.getElementById("vanillamilk").style.color == "orange") {
        var glaze = "vanillamilk";
    } else {
        var glaze ="doubleChoc";
    }
    return glaze;
}

// Adds number of buns to cart 
function addToCart() {
    // Referenced https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
    // Updates Quantity by Cart Icon
    var oldTotal = parseInt(sessionStorage.getItem("total"));
    var newTotal = 1 + oldTotal;
    sessionStorage.setItem("total", newTotal);
    document.getElementById("cartValue").innerHTML = "(" + newTotal + ")";

    // Creates new item for cart
    var radioNumber = document.querySelector('input[name=numberOfBuns]:checked').value;
    var newBun = new Bun(parseInt(radioNumber), checkGlaze(), parseInt(radioNumber)*3);


    var test = JSON.parse(sessionStorage.getItem("shoppingCart"));

    test.push([newBun]);

    console.log(test);
    sessionStorage.setItem("shoppingCart", JSON.stringify(test));

    // updates cart total
    var addPrice = parseInt(newBun.price);
    var newPrice = parseInt(sessionStorage.getItem("cartTotal")) + addPrice;
    sessionStorage.setItem("cartTotal", JSON.stringify(newPrice));
    if (document.getElementById("cartPageTotal") != null) {
        document.getElementById("cartPageTotal").innerHTML = "$&emsp;" + newPrice;
    }
}


function showCart() {
    var cart = JSON.parse(sessionStorage.getItem("shoppingCart"));
    var cartGrid = document.getElementById("cartGrid");
    // Referenced https://www.w3schools.com/js/js_loop_for.asp
    var i = 0;
    for (i = 0; i < cart.length; i++) {
        var bunArray = cart[i];
        var bun = bunArray[0];
        var quantity = bun.quantity;
        var glaze = bun.glaze;
        var price = bun.price;

        // Creates new row with price information
        var newRow = document.createElement('div');
        newRow.setAttribute('class', 'grid');
        newRow.setAttribute('id', i)
        var newGrid1 = document.createElement('div');
        newGrid1.setAttribute('class', "grid_item_4");
        newGrid1.innerHTML = quantity;
        var newGrid2 = document.createElement('div');
        newGrid2.setAttribute("class", "grid_item_5");
        newGrid2.innerHTML = "original bun bun";
        var newGrid3 = document.createElement('div');
        newGrid3.setAttribute("class", "grid_item_4");
        newGrid3.innerHTML = "with glaze";
        var newGrid4 = document.createElement('div');
        newGrid4.innerHTML = glaze;
        newGrid4.setAttribute("class", "grid_item_5");
        var newGrid5 = document.createElement('div');
        newGrid5.setAttribute("class", "grid_item_4");
        var newGrid6 = document.createElement('div');
        newGrid6.setAttribute("class", "grid_item_5");
        newGrid6.innerHTML = "Total:";
        var newGrid7 = document.createElement('div');
        newGrid7.setAttribute("class", "grid_item_4");
        newGrid7.innerHTML = "$" + price;
        var newGrid8 = document.createElement('div');
        newGrid8.setAttribute("class", "grid_item_6");
        newGrid8.setAttribute("onclick", "deleteFromCart(this)");
        newGrid8.innerHTML = "x";
        newRow.appendChild(newGrid1);
        newRow.appendChild(newGrid2);
        newRow.appendChild(newGrid3);
        newRow.appendChild(newGrid4);
        newRow.appendChild(newGrid5);
        newRow.appendChild(newGrid6);
        newRow.appendChild(newGrid7);
        newRow.appendChild(newGrid8);
        cartGrid.appendChild(newRow);
    }
}



function deleteFromCart(deleteX) {

    var parentRow = deleteX.parentNode;
    
    console.log(oldPrice);
    var index = parseInt(parentRow.id);

    var cart = JSON.parse(sessionStorage.getItem("shoppingCart"));

    var oldPrice = parseInt(cart[index][0].price);
    var newPrice = parseInt(sessionStorage.getItem("cartTotal")) - oldPrice;
    sessionStorage.setItem("cartTotal", JSON.stringify(newPrice));
    var printPrice = sessionStorage.getItem("cartTotal")
    document.getElementById("cartPageTotal").innerHTML = "$&emsp;" + newPrice;

    cart.splice(index,1);

    sessionStorage.setItem("shoppingCart", JSON.stringify(cart));

    var grid = parentRow.parentNode;

    var gridContainer = grid.parentNode;

    gridContainer.removeChild(grid);

    var newGrid = document.createElement('div');
    newGrid.setAttribute("id","cartGrid");

    gridContainer.insertBefore(newGrid, gridContainer.childNodes[0]);

    showCart();

    // updates cart icon counter
    var oldTotal = parseInt(sessionStorage.getItem("total"));
    var newTotal = oldTotal - 1;
    sessionStorage.setItem("total", newTotal);
    document.getElementById("cartValue").innerHTML = "(" + newTotal + ")";


}



// Checks stored session value for total buns in cart and updates 
function onLoad() {
    //  checks if anything is in the cart, then generates one if not
    if (sessionStorage.getItem("total") == null) {
        sessionStorage.setItem("total", 0);
    //  otherwise updates the cart value
    } else {
       document.getElementById("cartValue").innerHTML = "(" + sessionStorage.getItem("total") + ")";
    }

    // checks if cart has been created yet
    if (sessionStorage.getItem("shoppingCart") == null) {
        sessionStorage.setItem("shoppingCart", JSON.stringify([]));
    }

    // checks is a total price has already been started/tracked 
    if (sessionStorage.getItem("cartTotal") == null) {
        sessionStorage.setItem("cartTotal", 0);
    } else {
        document.getElementById("cartPageTotal").innerHTML = "$&emsp;" + parseInt(sessionStorage.getItem("cartTotal"));
    }

    // prints out cart on cart page
    var cCart = JSON.stringify(sessionStorage.getItem("shoppingCart"));
    if (cCart.length != 0) {
        showCart();
    }


}
