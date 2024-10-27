document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "Franny, if kisses were snowflakes, I'd send you a blizzard.",
        "I don't need a genie in a bottle, Franny, because you've already granted my every wish.",
        "Girl, you must be a magician because every time I look at you, everyone else disappears.",
        "Franny, are you French? Because Eiffel for you.",
        "If beauty were a crime, Franny, you’d be serving a life sentence.",
        "You’re the kind of girl who could make even a devil like me want to pray.",
        "Franny, if being sexy was a sin, then you’re a sinner's paradise.",
        "You’re like my morning coffee, Franny – hot, strong, and something I can’t start my day without.",
        "Franny, you're the flame, and I'm just here to get burned.",
        "I’d rather fight with you than make love to anyone else.",
        "Franny, you're my favorite distraction, my sweetest addiction, and my biggest weakness.",
        "Some people need a whole world to feel alive. I just need you, Franny.",
        "Hot like fire, cold as ice – Franny, you keep me on my toes, and I love every minute.",
        "You must be tired, Franny, because you've been running through my mind all day... and you’re not paying rent.",
        "Franny, you could turn a sinner into a saint and a saint into a sinner."
    ];

    const quoteElement = document.getElementById("quote");
    const generateQuoteButton = document.getElementById("generateQuote");

    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.textContent = quotes[randomIndex];
    }

    // Generate a new quote when the button is clicked
    generateQuoteButton.addEventListener("click", generateRandomQuote);

    // Generate a quote on page load
    generateRandomQuote();
});
