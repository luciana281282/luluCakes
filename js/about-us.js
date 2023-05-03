
let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length -1;

slider.querySelector(".controls .up").addEventListener("click",function(){
    if(currentSlide == 0){
        return;
    } 
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;  // la comilla  `` se pone con AltGrl + ] ó }
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)*-100}vh`;
});

slider.querySelector(".controls .down").addEventListener("click",function(){
    if(currentSlide == totalSlides){
        return;
    } 
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)*-100}vh`;
});

//GENERADOR DE FRASES POR API

const url = "https://type.fit/api/quotes";
//da una promise que hay que convertir con .then
fetch(url).then(response => response.json()).then(data => {
    // data.forEach(textos => {
    //     console.log(textos)
    // })
    let numberPhrase = randomRange(0, data.length)
    document.querySelector("#apiPhrase").innerHTML = data[numberPhrase].text;
    document.querySelector("#author").innerHTML = data[numberPhrase].author;

    numberPhrase = randomRange(0, data.length)
    document.querySelector("#apiPhrase1").innerHTML = data[numberPhrase].text;
    document.querySelector("#author1").innerHTML = data[numberPhrase].author;

    numberPhrase = randomRange(0, data.length)
    document.querySelector("#apiPhrase2").innerHTML = data[numberPhrase].text;
    document.querySelector("#author2").innerHTML = data[numberPhrase].author;

    numberPhrase = randomRange(0, data.length)
    document.querySelector("#apiPhrase3").innerHTML = data[numberPhrase].text;
    document.querySelector("#author3").innerHTML = data[numberPhrase].author;

    numberPhrase = randomRange(0, data.length)
    document.querySelector("#apiPhrase4").innerHTML = data[numberPhrase].text;
    document.querySelector("#author4").innerHTML = data[numberPhrase].author;



    // console.log(frase)
    // console.log(data[randomRange(0, data.length)].text) // VALE OROOOO ES LA POSTA!!!!!!
    // document.querySelector("#apiPhrase").innerHTML = frase; 
})
.catch(err => console.log(err))




function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }