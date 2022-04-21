let videoBackground = document.getElementById('myVideo');
let btnVideo = document.getElementById('btnVideo');
let videoContainer = document.getElementById('musicVideo');
let video = document.getElementById('video');
let h1Tag = document.getElementsByClassName('h1');


btnVideo.addEventListener('click',function(){
    if(videoContainer.style.display !== 'block'){
        videoContainer.style.display = 'block';
        video.play();
        btnVideo.style.display = 'none';
        h1Tag[0].style.top = '-300px';
        videoBackground.style.opacity = '0.5'

    }else{
        videoContainer.style.display = 'none';
        video.pause();
        
    }
})