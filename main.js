let header= document.getElementById("head");
let guess = document.getElementById("guessText");

let diffsContainer = document.getElementById("diffsContainer");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let difText = document.getElementById("difText");
let newGame = document.getElementById("newGame");

let selector = document.getElementById("selector");

let prefab = document.querySelectorAll(".prefab");


let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");
let color6 = document.getElementById("color6");
let color7 = document.getElementById("color7");

easy.addEventListener("click", function(){
    color1.classList.remove("hide");
    color2.classList.remove("hide");
    color3.classList.remove("hide");
    color4.classList.add("hide");
    color5.classList.add("hide");
    color6.classList.add("hide");
    color7.classList.add("hide");
    selector.classList.add("hide");


    let colorCorrect = randomColor();
    header.innerHTML = colorCorrect;
    
    let randomWin = Math.floor(Math.random() * 3);
    let rndColor1 = randomColor();
    let rndColor2 = randomColor();

    switch(randomWin){
        case 0:
            color1.style.backgroundColor = colorCorrect;
            color2.style.backgroundColor = rndColor1;
            color3.style.backgroundColor = rndColor2;
            break;
        case 1:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = colorCorrect;
            color3.style.backgroundColor = rndColor2;
            break;
        case 2:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = colorCorrect;
            break;
    }

});

medium.addEventListener("click", function(){
    color1.classList.remove("hide");
    color2.classList.remove("hide");
    color3.classList.remove("hide");
    color4.classList.remove("hide");
    color5.classList.remove("hide");
    color6.classList.add("hide");
    color7.classList.add("hide");
    selector.classList.add("hide");

    let colorCorrect = randomColor();
    header.innerHTML = colorCorrect;

    let randomWin = Math.floor(Math.random() * 5);
    let rndColor1 = randomColor();
    let rndColor2 = randomColor();
    let rndColor3 = randomColor();
    let rndColor4 = randomColor();

    switch(randomWin){
        case 0:
            color1.style.backgroundColor = colorCorrect;
            color2.style.backgroundColor = rndColor1;
            color3.style.backgroundColor = rndColor2;
            color4.style.backgroundColor = rndColor3;
            color5.style.backgroundColor = rndColor4;
            break;
        case 1:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = colorCorrect;
            color3.style.backgroundColor = rndColor2;
            color4.style.backgroundColor = rndColor3;
            color5.style.backgroundColor = rndColor4;
            break;
        case 2:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = colorCorrect;
            color4.style.backgroundColor = rndColor3;
            color5.style.backgroundColor = rndColor4;
            break;
        case 3:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = rndColor3;
            color4.style.backgroundColor = colorCorrect;
            color5.style.backgroundColor = rndColor4;
            break;
        case 4:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = rndColor3;
            color4.style.backgroundColor = rndColor4;
            color5.style.backgroundColor = colorCorrect;
            break;
    }
});

hard.addEventListener("click", function(){
    color1.classList.remove("hide");
    color2.classList.remove("hide");
    color3.classList.remove("hide");
    color4.classList.remove("hide");
    color5.classList.remove("hide");
    color6.classList.remove("hide");
    color7.classList.remove("hide");
    selector.classList.add("hide");

    let colorCorrect = randomColor();
    header.innerHTML = colorCorrect;

    let randomWin = Math.floor(Math.random() * 7);
    let rndColor1 = randomColor();
    let rndColor2 = randomColor();
    let rndColor3 = randomColor();
    let rndColor4 = randomColor();
    let rndColor5 = randomColor();
    let rndColor6 = randomColor();

    switch(randomWin){
        case 0:
            color1.style.backgroundColor = colorCorrect;
            color2.style.backgroundColor = rndColor1;
            color3.style.backgroundColor = rndColor2;
            color4.style.backgroundColor = rndColor3;
            color5.style.backgroundColor = rndColor4;
            color6.style.backgroundColor = rndColor5;
            color7.style.backgroundColor = rndColor6;
            break;
        case 1:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = colorCorrect;
            color3.style.backgroundColor = rndColor2;
            color4.style.backgroundColor = rndColor3;
            color5.style.backgroundColor = rndColor4;
            color6.style.backgroundColor = rndColor5;
            color7.style.backgroundColor = rndColor6;
            break;
        case 2:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = colorCorrect;
            color4.style.backgroundColor = rndColor3;
            color5.style.backgroundColor = rndColor4;
            color6.style.backgroundColor = rndColor5;
            color7.style.backgroundColor = rndColor6;
            break;
        case 3:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = rndColor3;
            color4.style.backgroundColor = colorCorrect;
            color5.style.backgroundColor = rndColor4;
            color6.style.backgroundColor = rndColor5;
            color7.style.backgroundColor = rndColor6;
            break;
        case 4:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = rndColor3;
            color4.style.backgroundColor = rndColor4;
            color5.style.backgroundColor = colorCorrect;
            color6.style.backgroundColor = rndColor5;
            color7.style.backgroundColor = rndColor6;
            break;
        case 5:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = rndColor3;
            color4.style.backgroundColor = rndColor4;
            color5.style.backgroundColor = rndColor5;
            color6.style.backgroundColor = colorCorrect;
            color7.style.backgroundColor = rndColor6;
            break;
        case 6:
            color1.style.backgroundColor = rndColor1;
            color2.style.backgroundColor = rndColor2;
            color3.style.backgroundColor = rndColor3;
            color4.style.backgroundColor = rndColor4;
            color5.style.backgroundColor = rndColor5;
            color6.style.backgroundColor = rndColor6;
            color7.style.backgroundColor = colorCorrect;
            break;
    }

    
});

prefab.forEach(element => {
    element.addEventListener("click", function(){
        let backgroundColor = RGBtoHex(element.style.backgroundColor);
        if(backgroundColor === header.innerHTML){
            guess.innerHTML = "Correct!";
            guess.style.color = element.style.backgroundColor;
            header.style.color = element.style.backgroundColor;

            difText.classList.add("hide");
            easy.classList.add("hide");
            medium.classList.add("hide");
            hard.classList.add("hide");
            newGame.classList.remove("hide");

            newGame.addEventListener("click", function(){
                location.reload();
            });
            prefab.forEach(element => {
                if(RGBtoHex(element.style.backgroundColor) !== header.innerHTML){
                    element.classList.add("hide");
                }
            });

            
        } else {
            element.classList.add("hide");
            guess.innerHTML = "Guess Again, that color was " + backgroundColor;
            guess.style.color = backgroundColor;
        }
    });
});

function RGBtoHex(c) {
    let numbers = c.match(/\d+/g);
    let r = parseInt(numbers[0]).toString(16);
    let g = parseInt(numbers[1]).toString(16);
    let b = parseInt(numbers[2]).toString(16);

    if(b.length === 1) { b = "0" + b; }
    if(r.length === 1) { r = "0" + r; }
    if(g.length === 1) { g = "0" + g; }

    return "#" + r + g + b;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);

    if(hexR.length === 1) { hexR = "0" + hexR; }
    if(hexG.length === 1) { hexG = "0" + hexG; }
    if(hexB.length === 1) { hexB = "0" + hexB; }

    return "#" + hexR + hexG + hexB;
}

