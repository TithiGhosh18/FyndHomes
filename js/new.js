var mbackground = document.getElementById('mbackground'),
images = ['images/banner/unsplash1.jpg','images/banner/unsplash2.jpg','images/banner/unsplash3.jpg']
var imagecount = images.length
var number =Math.floor(Math.random() *imagecount);
window.onload= function(){
    mbackground.style.backgroundImage='url('+images[number]+')'
}