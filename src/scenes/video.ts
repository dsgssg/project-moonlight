export function VideoScene() {
  return `
    <div class="video-scene">

      <video
        id="birthdayVideo"
        playsinline
        controls
        autoplay
      >
        <source src="/videos/shinchan.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <button
        id="videoNext"
        class="continue"
        hidden
      >
        Continue →
      </button>

    </div>
  `;
}