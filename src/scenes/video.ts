export function VideoScene() {

    const videoUrl = `${import.meta.env.BASE_URL}videos/shinchan.mp4`;

    return `
        <div class="video-scene">

            <video
                id="birthdayVideo"
                controls
                playsinline
                preload="auto"
            >
                <source src="${videoUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>

            <button
                id="videoNext"
                style="display:none;"
            >
                Continue →
            </button>

        </div>
    `;
}