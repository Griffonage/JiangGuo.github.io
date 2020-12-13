if (Hls.isSupported()) {
    let headerId = document.getElementById('page-header');
    let str = "<video id='video' controlslist='nodownload'  disablePictureInPicture preload muted loop autoplay style='height: 100%;width: 100%;object-fit: fill;' onclick='muteControl()'></video>";
    headerId.innerHTML+=str;
    let video = document.getElementById('video');
    let videoSrc = 'https://file.ajungle.cn/img/index.m3u8';
    let hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
}

function muteControl() {
	let video = document.getElementById('video');
	if(video.muted){
		video.muted=false;
	}else{
		video.muted=true;
	}
}
