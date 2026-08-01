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

showLanding();

document.addEventListener("show-ending", () => {
    showEnding();
});

function showLanding() {

    app.innerHTML = App();

    document
        .getElementById("startJourney")
        ?.addEventListener("click", showVideo);

}

function showVideo() {

    app.innerHTML = VideoScene();

    const video = document.getElementById("birthdayVideo") as HTMLVideoElement;
    const next = document.getElementById("videoNext") as HTMLButtonElement;

    video.play();

    video.onended = () => {

        next.hidden = false;

    };

    next.onclick = showCake;

}

function showCake() {

    app.innerHTML = CakeScene();

    const flame = document.getElementById("flame") as HTMLElement;
    const continueBtn = document.getElementById("cakeContinue") as HTMLButtonElement;

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

    continueBtn.onclick = showLetter;

}

function showLetter() {

    app.innerHTML = LetterScene();

    initLetter();

}

function showEnding() {

    app.innerHTML = EndingScene();

    window.addEventListener("showEnding", () => {
    showEnding();
});

}