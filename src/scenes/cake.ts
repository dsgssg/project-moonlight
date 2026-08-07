export function CakeScene() {

    const cakeImg = `${import.meta.env.BASE_URL}images/cake.png`;

    return `
        <main class="cake-scene">

            <h1 class="cake-title">Make a Wish ✨</h1>

            <div class="cake-container">

                <div id="flame"></div>

                <div class="candle"></div>

                <img
                    src="${cakeImg}"
                    alt="Birthday Cake"
                    class="cake-image"
                />

            </div>

            <p class="cake-text">
                Tap the candle to blow it out
            </p>

            <button
                id="cakeContinue"
                class="continue"
                hidden
            >
                Continue →
            </button>

        </main>
    `;
}