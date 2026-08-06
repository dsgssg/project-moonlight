import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/animations.css";
import "./styles/global.css";

import { App } from "./App";
import { VideoScene } from "./scenes/video";
import { CakeScene } from "./scenes/cake";
import { LetterScene } from "./scenes/letter";
import { EndingScene } from "./scenes/ending";
import { initLetter } from "./letter";

const app = document.getElementById("app") as HTMLDivElement;

// ---------------- START ----------------

showLanding();

// Listen for ending page from letter.ts
document.addEventListener("show-ending", () => {
    showEnding();
});

// ---------------- LANDING ----------------

function showLanding() {

    app.innerHTML = App();

    document
        .getElementById("startJourney")
        ?.addEventListener("click", showVideo);

}

// ---------------- VIDEO ----------------

function showVideo() {

    app.innerHTML = VideoScene();

    const video = document.getElementById("birthdayVideo") as HTMLVideoElement;
    const next = document.getElementById("videoNext") as HTMLButtonElement;

    if (!video || !next) return;

    next.style.display = "none";

    video.load();

    video.play().catch(() => {});

    // Show button when video ends
    video.onended = () => {

        next.style.display = "block";

    };

    // Backup if onended doesn't fire
    video.ontimeupdate = () => {

        if (
            video.duration &&
            video.currentTime >= video.duration - 0.2
        ) {

            next.style.display = "block";

        }

    };

    next.onclick = () => {

        showCake();

    };

}

// ---------------- CAKE ----------------

function showCake() {

    app.innerHTML = CakeScene();

    const flame = document.getElementById("flame") as HTMLElement;
    const continueBtn = document.getElementById("cakeContinue") as HTMLButtonElement;

    if (!flame || !continueBtn) return;

    continueBtn.hidden = true;

    flame.onclick = () => {

        flame.remove();

        const message = document.createElement("p");

        message.className = "wish-message";

        message.innerHTML =
            "💖 May your smile always shine brighter than the stars, and may happiness always find its way to you. Happy Birthday, Shreeya.";

        document.querySelector(".cake-scene")?.appendChild(message);

        setTimeout(() => {

            continueBtn.hidden = false;

        }, 2500);

    };

    continueBtn.onclick = () => {

        showLetter();

    };

}

// ---------------- LETTER ----------------

function showLetter() {

    app.innerHTML = LetterScene();

    initLetter();

}

// ---------------- ENDING ----------------

function showEnding() {

    app.innerHTML = EndingScene();

}