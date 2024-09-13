const slider = document.querySelector(".slider")
const img = document.querySelectorAll(".slider img")



let currentIndex = 0
const totalImages = img.length;

function ShowSlider(index){
    if (index >= totalImages){
        currentIndex = 0
    } else if (index < 0){
        currentIndex = totalImages - 1
    } else {
        currentIndex = index
    }
    slider.style.transform = `translateX(${-currentIndex * 100}%)`
}

//SLIDER AUTOMATICO (3 segundos)
function AutoSlide(){
    ShowSlider(currentIndex + 1)
}

let autoSlideInterval = setInterval(AutoSlide, 3000)