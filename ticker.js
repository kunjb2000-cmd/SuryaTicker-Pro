// SuryaTicker Pro - Ticker Engine

function updateTicker() {

    const news = document.getElementById("news");

    if (!news) return;

    if (SETTINGS.mode === "text") {

        news.innerHTML = SETTINGS.customText;

    }

    news.style.fontSize = SETTINGS.fontSize + "px";
    news.style.animationDuration = SETTINGS.speed + "s";

}

updateTicker();
