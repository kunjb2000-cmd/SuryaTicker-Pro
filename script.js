const news = document.getElementById("news");

// अभी डेमो टेक्स्ट
let headlines = [
"🚩 SuryaTicker Pro Started Successfully",
"📰 RSS Engine Loading...",
"🌍 Welcome to Professional Broadcast Graphics",
"📺 PRISM Live Compatible",
"⚡ Version 1.0"
];

// एक लाइन में जोड़ना
news.innerHTML = headlines.join("  ◆  ");


// आगे RSS यहीं से आएगी
async function loadRSS(){

console.log("RSS Loading...");

// अगले Version में यहीं RSS Fetch होगा

}

loadRSS();
