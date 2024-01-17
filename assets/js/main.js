const header = document.querySelector('.header__top');
const menuBtn = document.querySelector('.header__burger');
    

document.addEventListener('click', function(e){
    if(e.target == menuBtn){
        header.classList.add('is_open');
    } else if (e.target.parentElement == header || e.target.parentElement.parentElement == header){
        header.classList.add('is_open');
    } else {
        header.classList.remove('is_open');
        return;
    }
});

// Player =====================

let video = document.querySelector('#video-main');
let playBtn = document.querySelector('#player__start');
let pauseBtn = document.querySelector('#player__pause');
let soundBtn = document.querySelector('#player__sound');
let playerDin = document.querySelectorAll('.player__din span');

playBtn.onclick = play;
pauseBtn.onclick = pause;
soundBtn.onclick = sound;

function play(){
    video.play();
    playBtn.style.zIndex = 1;
    pauseBtn.style.zIndex = 2;
    playerDin.forEach((el) => {
        el.style.animationPlayState="running"
    });
}
function pause(){
    video.pause();
    playBtn.style.zIndex = 2;
    pauseBtn.style.zIndex = 1;
    playerDin.forEach((el) => {
        el.style.animationPlayState="paused"
    });
}
function sound(){
    video.volume = 0.5;
    if(video.muted == false){
        video.muted = true;
        soundBtn.style.background = '#585858';
    } else {
        video.muted = false;
        soundBtn.style.background = '#0064FE';
    }
    
}
