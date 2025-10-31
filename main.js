// function to directly set YouTube playback speed
function setYouTubeSpeed(speed) {
    const video = document.querySelector('video');
    // Check if video element exists
    if (video) {
        video.playbackRate = speed;
        // get current playback speed
        console.log(`Playback speed set to ${speed}x`);
    } else {
        // catch case if no video element is found
        console.log('No YouTube video found');
    }
}

// Create buttons for quick access
[2, 2.25, 2.5, 2.75, 3, 3.25, 3.5, 3.75, 4, 5, 10].forEach(speed => {
    const btn = document.createElement('button');
    btn.textContent = `${speed}x`;
    // sets button style and position topright overlay
    btn.style.cssText = 'position:fixed;top:20px;right:' + (20 + (speed-2)*60) + 'px;z-index:9999;padding:10px;background:#ff0000;color:white;border:none;border-radius:4px;cursor:pointer;';
    btn.onclick = () => setYouTubeSpeed(speed);
    // call function on button click
    document.body.appendChild(btn);
});
// log buttons
console.log('Speed buttons added: 2x, 3x, 4x, 5x');
