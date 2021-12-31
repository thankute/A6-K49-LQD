var imgs = document.querySelectorAll('.image img')
var galleryImg = document.querySelector('.gallery img')
var sliderFootBall = document.querySelectorAll('.fb-member')
var leftBtn = document.querySelector('.btn-left')
var rightBtn = document.querySelector('.btn-right')
const funnyVideo = document.querySelectorAll('#funny-video video')
const funnyLeftBtn = document.querySelector('.funny-left-btn')
const funnyRightBtn = document.querySelector('.funny-right-btn')
var closeBtn = document.querySelector('.nav__mobile-close')
var navMobile = document.querySelector('.nav__mobile')
var navBarsBtn = document.querySelector('.nav-bars-btn')
var navOverLay = document.querySelector('.nav__overlay')
navBarsBtn.onclick = function() {
    navMobile.classList.add('transform')
    navOverLay.classList.add('display-block')
}

closeBtn.onclick = function() {
    navMobile.classList.remove('transform')
    navOverLay.classList.remove('display-block')
}



// img show
var currentIndex = 0;
setInterval(function () {
    galleryImg.src = imgs[currentIndex].src;
    currentIndex++;
    if(currentIndex > (imgs.length -1)) {
        currentIndex = 0;
    }
},3000)

// football show
var footBallLength = sliderFootBall.length -1;
var fbIndex = 0;
leftBtn.onclick = function() {
    fbIndex--;
    if(fbIndex < 0){
        fbIndex = footBallLength;
        sliderFootBall[fbIndex].classList.remove('hide');    
        sliderFootBall[0].classList.add('hide');    
    }
    else {
        sliderFootBall[fbIndex].classList.remove('hide');    
        sliderFootBall[fbIndex+1].classList.add('hide');    
    }
}
rightBtn.onclick = function() {
    fbIndex++;
    if (0<= fbIndex && fbIndex <= footBallLength) {
        sliderFootBall[fbIndex].classList.remove('hide');    
        sliderFootBall[fbIndex-1].classList.add('hide');
    }
    else {
        fbIndex = 0;
        sliderFootBall[footBallLength].classList.add('hide');
        sliderFootBall[fbIndex].classList.remove('hide');
    }
}

// FUNNY VIDEO
var funnyVideoLength = funnyVideo.length - 1;
var videoIndex = 0;

funnyLeftBtn.onclick = function() {
    videoIndex--;
    if(videoIndex < 0){
        videoIndex = funnyVideoLength;
        funnyVideo[videoIndex].classList.remove('hide');    
        funnyVideo[0].classList.add('hide');    
        if (funnyVideo[0].played) {
            funnyVideo[0].pause();
        }
    }
    else {
        funnyVideo[videoIndex].classList.remove('hide');    
        funnyVideo[videoIndex+1].classList.add('hide');    
        if (funnyVideo[videoIndex+1].played) {
            funnyVideo[videoIndex+1].pause();
        } 
    }
}
funnyRightBtn.onclick = function() {
    videoIndex++;
    if (0<= videoIndex && videoIndex <= funnyVideoLength) {
        funnyVideo[videoIndex].classList.remove('hide');    
        funnyVideo[videoIndex-1].classList.add('hide');
        if (funnyVideo[videoIndex-1].played) {
        funnyVideo[videoIndex-1].pause();
        } 
    }
    else {
        videoIndex = 0;
        funnyVideo[funnyVideoLength].classList.add('hide');
        funnyVideo[videoIndex].classList.remove('hide');
        if (funnyVideo[funnyVideoLength].played) {
            funnyVideo[funnyVideoLength].pause();
        }
    }
}

