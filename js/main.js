// HTML elements
let burger = document.getElementById("burger"),
    menu = document.getElementById("menu"),
    magnifyingGlass = document.getElementById("magnifying-glass"),
    search = document.getElementById("search"),
    // Variables Group 1
    slider1 = document.getElementById("slider-1"),
    right1 = document.getElementById("right-1"),
    left1 = document.getElementById("left-1"),
    // Variables Group 2
    slider2 = document.getElementById("slider-2"),
    right2 = document.getElementById("right-2"),
    left2 = document.getElementById("left-2"),
    // Variables Group 3
    slider3 = document.getElementById("slider-3"),
    right3 = document.getElementById("right-3"),
    left3 = document.getElementById("left-3"),
    // Variables Group 4
    slider4 = document.getElementById("slider-4"),
    right4 = document.getElementById("right-4"),
    left4 = document.getElementById("left-4"),
    // Variables Group 5
    slider5 = document.getElementById("slider-5"),
    right5 = document.getElementById("right-5"),
    left5 = document.getElementById("left-5"),
    // Variables Group 6
    slider6 = document.getElementById("slider-6"),
    right6 = document.getElementById("right-6"),
    left6 = document.getElementById("left-6"),
    // Variables Group 7
    slider7 = document.getElementById("slider-7"),
    right7 = document.getElementById("right-7"),
    left7 = document.getElementById("left-7"),
    // Variables Group 8
    slider8 = document.getElementById("slider-8"),
    right8 = document.getElementById("right-8"),
    left8 = document.getElementById("left-8");



console.log(slider1, right1, left1, slider2, right2, left2);

// created variables
let activation = "active",
    searchMood = "on",
    changeMood = 1,
    change = 0;

// functions
burger.onclick = () => {
    if (activation === "active") {
        menu.style.display = "block";
        activation = "notActive";
    } else {
        menu.style.display = "none";
        activation = "active";
    }
}

magnifyingGlass.onclick = () => {
    if (searchMood === "on") {
        search.style.display = "block";
        magnifyingGlass.style.color = "#ff1000";
        searchMood = "off";
    } else {
        search.style.display = "none";
        magnifyingGlass.style.color = "#06c";
        searchMood = "on";
    }
}

// Function Group 1 
left1.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider1.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {

        change -= 130;
        slider1.style.transform = `translateX(${change}px)`;
    }
}
right1.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider1.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {

        change += 130;
        slider1.style.transform = `translateX(${change}px)`;
    }
}

// Function Group 2
left2.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider2.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change -= 130;
        slider2.style.transform = `translateX(${change}px)`;
    }
}
right2.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider2.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change += 130;
        slider2.style.transform = `translateX(${change}px)`;
    }
}

// Function Group 3
left3.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider3.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change -= 130;
        slider3.style.transform = `translateX(${change}px)`;
    }
}
right3.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider3.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change += 130;
        slider3.style.transform = `translateX(${change}px)`;
    }
}

// Function Group 4
left4.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider4.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change -= 130;
        slider4.style.transform = `translateX(${change}px)`;
    }
}
right4.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider4.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change += 130;
        slider4.style.transform = `translateX(${change}px)`;
    }
}

// Function Group 5
left5.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider5.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change -= 130;
        slider5.style.transform = `translateX(${change}px)`;
    }
}
right5.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider5.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change += 130;
        slider5.style.transform = `translateX(${change}px)`;
    }
}

// Function Group 6
left6.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider6.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change -= 130;
        slider6.style.transform = `translateX(${change}px)`;
    }
}
right6.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider6.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change += 130;
        slider6.style.transform = `translateX(${change}px)`;
    }
}

// Function Group 2
left7.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider7.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change -= 130;
        slider7.style.transform = `translateX(${change}px)`;
    }
}
right7.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider7.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change += 130;
        slider7.style.transform = `translateX(${change}px)`;
    }
}
// Function Group 8
left8.onclick = function () {
    if (changeMood === 1) {
        change -= 130;
        slider8.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change -= 130;
        slider8.style.transform = `translateX(${change}px)`;
    }
}
right8.onclick = function () {
    if (changeMood === 1) {
        change += 130;
        slider8.style.transform = `translateX(${change}px)`;
        changeMood++;
    } else {
        change += 130;
        slider8.style.transform = `translateX(${change}px)`;
    }
}