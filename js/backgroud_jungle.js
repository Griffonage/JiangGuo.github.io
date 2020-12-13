if (Hls.isSupported()) {
    let headerId = document.getElementById('page-header');
    let str = "<video id='video' preload muted loop autoplay style='height: 100%;width: 100%;object-fit: cover;'></video>";
    headerId.innerHTML+=str;
    let video = document.getElementById('video');
    let videoSrc = 'https://cdn.jsdelivr.net/gh/lete114/CDN2/video/4.m3u8';
    let hls = new Hls();
    hls.loadSource(videoSrc);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
    });
}
