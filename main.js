let videoBackground = document.getElementById('myVideo');
let btnVideo = document.getElementById('btnVideo');
let videoContainer = document.getElementById('musicVideo');
let video = document.getElementById('video');

btnVideo.addEventListener('click',function(){
    if(videoContainer.style.display !== 'block'){
        videoContainer.style.display = 'block';
        video.play();
    }else{
        videoContainer.style.display = 'none';
        video.pause();
        
    }
})