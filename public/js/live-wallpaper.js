// live-wallpaper.js

// Function to change the background to a live wallpaper (video)
function setLiveWallpaper() {
    const video = document.createElement('video');
    video.src = '/assets/videos/ENDANGERED SPECIES AND WATER QUALITY (1).mp4'; // Replace with the actual path to your video
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.minWidth = '100%';
    video.style.minHeight = '100%';
    video.style.zIndex = '-1';
  
    // Append the video to the body
    document.body.appendChild(video);
  }
  
  // Add an event listener to the "Live Wallpaper" link
  const liveWallpaperLink = document.getElementById('https://nasaspaceapps-7ax8508.slack.com/archives/C06068EDDFC/p1696669866874649');

  