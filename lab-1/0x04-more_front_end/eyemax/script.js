// Replace 'VIDEO_ID' with the actual YouTube video ID
const videoId = 'dQw4w9WgXcQ';

// Create the YouTube player
function createPlayer() {
  // Load the YouTube API script
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Callback function when the YouTube API is ready
  window.onYouTubeIframeAPIReady = function() {
    new YT.Player('player', {
      videoId: videoId,
      playerVars: {
        autoplay: 0, // Autoplay disabled
        modestbranding: 1, // Hide the YouTube logo
      },
    });
  };
}

// Call the createPlayer function to initialize the YouTube player
createPlayer();
