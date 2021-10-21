// Click do menu
$('.navbar-toggler').click(function(){
    $('.navbar-toggler i').toggleClass('fa-times');
})


// Monta o Slide
var slideIndex = 1;
    showDivs(slideIndex)

function plusDivs(n) {
    showDivs(slideIndex += n)
}

function currentDiv(n) {
    showDivs(slideIndex = n)
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide")
    var dots = document.getElementsByClassName("btnSlide")
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length} 
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" btnSlideAtivo", "")
    }
    x[slideIndex-1].style.display = "block"
    dots[slideIndex-1].className += " btnSlideAtivo"
}