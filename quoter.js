// list of possible songs to quote
var songs = [
    "Across the Sea",
    "A Little Bit Of Love",
    "All My Favorite Songs",
    "Aloo Gobi",
]

// regenerate the song label to be a random song from the list of songs
function generate() {
    var songLabel = document.getElementById("song_label");
    var initialLabel = songLabel.innerHTML; // current song
    var newLabel = songs[Math.floor(Math.random() * songs.length)]; // random song
    // regenerate if there's a duplicate so that the song always changes when the button is pressed
    if (newLabel != initialLabel)
    {
        songLabel.innerHTML = newLabel;
    }
    else
    {
        generate();
    }
}