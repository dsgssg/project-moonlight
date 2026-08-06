export function VideoScene() {
  const videoUrl = `${import.meta.env.BASE_URL}videos/shinchan.mp4`;

  return `
    <div class="video-scene">
      <video
        id="birthdayVideo"
        autoplay
        playsinline
        controls
      >
        <source src="${videoUrl}" type="video/mp4">
      </video>

      <button id="videoNext" hidden>
        Continue →
      </button>
    </div>
  `;
}