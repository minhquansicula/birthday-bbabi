function showSurprise() {
    const surprise = document.getElementById('surprise');
    
    music.volume = 0.5; // 50% volume   

    const music = document.getElementById('background-music');
    const playBtn = document.getElementById('play-btn');
    const pauseBtn = document.getElementById('pause-btn');

// Play music
playBtn.addEventListener('click', () => {
  music.play();
});

// Pause music
pauseBtn.addEventListener('click', () => {
  music.pause();
});
  
    // Make the surprise visible
    surprise.style.display = 'flex';
    surprise.style.opacity = 0;
  
    // Gradually show it
    setTimeout(() => {
      surprise.style.transition = 'opacity 1s ease-in-out';
      surprise.style.opacity = 1;
    }, 50);
  
    // Automatically hide after 3 seconds
    setTimeout(() => {
      surprise.style.opacity = 0;
  
      // Wait for fade-out transition to complete before hiding
      setTimeout(() => {
        surprise.style.display = 'none';
      }, 1000); // Matches the fade-out duration
    }, 3000); // Visible for 3 seconds
  }
  
  // Music controls
  const music = document.getElementById('background-music');
  const playBtn = document.getElementById('play-btn');
  const pauseBtn = document.getElementById('pause-btn');
  
  // Auto play music when the page loads
  window.addEventListener('load', () => {
    music.play();
  });
  
  // Play button
  playBtn.addEventListener('click', () => {
    music.play();
  });
  
  // Pause button
  pauseBtn.addEventListener('click', () => {
    music.pause();
  });
  