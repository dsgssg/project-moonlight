export function VideoScene() {
  return `
    <div class="video-scene">

      <video
        id="birthdayVideo"
        autoplay
        playsinline
        controls
      >
        <source src="${import.meta.env.BASE_URL}videos/shinchan.mp4" type="video/mp4">
      </video>

      <button id="videoNext" hidden>
        Continue →
      </button>

    </div>
  `;
}