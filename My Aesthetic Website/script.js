
function showMessage() {
    const message = document.getElementById("secret-message");

    message.innerHTML =
        "No matter how far the stars are, " +
        "I will always cheer for you. Keep shining, Taehyun! ♡";
}

function toggleMusic() {
    const music = document.getElementById("background-music");
    const button = document.getElementById("music-button");

    if (music.paused) {
        music.play()
            .then(() => {
                button.innerHTML = "Ⅱ";
            })
            .catch(() => {
                alert("Musik belum bisa diputar. Periksa file audio/music.mp3, ya.");
            });
    } else {
        music.pause();
        button.innerHTML = "▶";
    }
}
