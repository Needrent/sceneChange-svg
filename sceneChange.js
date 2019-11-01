"use strict";

const music = document.querySelector("#music");
const loadScreen = document.querySelector(".loadScreen");

document.querySelector('[data-start="startAnimation"]').addEventListener("click", e=>{
    loadScreen.classList.add("hide");
    music.currentTime = 0;
    music.play();
    startAnimation();
})

function startAnimation(){
    fetch("eye_01.svg").then(e => e.text()).then(svg =>{
        console.log("fetch 1 ran");
        document.querySelector("main").innerHTML = svg;
    });
    // activate next scene
    setTimeout(scene02,500);
}

//Next scene
function scene02(){
    fetch("eye_02.svg").then(e => e.text()).then(svg =>{
        console.log("fetch 2 ran");
        document.querySelector("main").innerHTML = svg;
    });
    setTimeout(scene03,500);
}

function scene03(){
    fetch("eye_03.svg").then(e => e.text()).then(svg =>{
        console.log("fetch 2 ran");
        document.querySelector("main").innerHTML = svg;
    });
    setTimeout(scene04,500);
}

function scene04(){
    fetch("eye_04.svg").then(e => e.text()).then(svg =>{
        console.log("fetch 2 ran");
        document.querySelector("main").innerHTML = svg;
    });
    setTimeout(scene05,500);
}

function scene05(){
    fetch("eye_05.svg").then(e => e.text()).then(svg =>{
        console.log("fetch 2 ran");
        document.querySelector("main").innerHTML = svg;
    });
}