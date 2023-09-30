let interval = null;

/* SELECTORS */
const AD_SELECTOR = ".forward-anim";
const VIDEO_SELECTOR = "video";

/* CONSTANTS */
const INTERVAL_GAP = 100;
const AD_VOLUME = 0;
const AD_PLAYBACK_RATE = 16;


function adInProgress() {
    const ad = document.querySelector(AD_SELECTOR);
    return ad && ad.style.display !== "none";
}

function skipAd() {
    const video = document.querySelector(VIDEO_SELECTOR);
    if (video) {
        video.volume = AD_VOLUME;
        video.playbackRate = AD_PLAYBACK_RATE;
    }
}

window.addEventListener("load", () => {
    interval = setInterval(() => {
        const video = document.querySelector(VIDEO_SELECTOR);
        if (!video) return;
        if (adInProgress()) {
            skipAd();
        } else {
            // Reset volume and playback rate
            video.volume = 1;
            video.playbackRate = 1;
        }
    }, 1);
}, false);
