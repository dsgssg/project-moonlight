export function initLetter() {

    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    if (!envelope || !letter) return;

    envelope.addEventListener("click", () => {

        envelope.remove();

        letter.classList.remove("hidden");

        const target = document.getElementById("letterText") as HTMLElement;
        const button = document.getElementById("letterContinue") as HTMLButtonElement;

        const message = `Dear Shreeya ❤️

Yo... first of all,

HAPPY WALA BIRTHDAYYY!! ❤️

You finally turned 19 today.

Babay... badi ho rahi hai.

I'm genuinely so happy that my small babay is becoming big.

Saw you from your 16th birthday (mera pulse nikal bf hu 4 extra lunga)

17 was when I surprised you (student ko pen hi dena chahiye 🙂‍↕️)

18th was when you finally became an adult.

And today...

You're 19. (Big babay 😎)

It honestly feels like I'm watching you grow up right in front of my eyes.(choti babay getting big )

I wish that i could see you smilling and being happy foreverr of your life .

May every dream you have come true.

May life always be kind to you.

And selfishly...

I hope I get to celebrate many, many more birthdays with you.

Happy Birthday Dear`;

        target.textContent = "";

        let i = 0;

        function type() {

            if (i < message.length) {

                target.textContent += message.charAt(i);

                i++;

                setTimeout(type, 35);

            } else {

                // Show Continue button
                button.hidden = false;

                // Go to next page when clicked
                button.onclick = () => {

                    document.dispatchEvent(
                        new CustomEvent("show-ending")
                    );

                };

            }

        }

        type();

    });

}