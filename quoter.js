// list of possible songs to quote
var songs = [
    "Across the Sea",
    "A Little Bit Of Love",
    "All My Favorite Songs",
    "Aloo Gobi",
    "Beach Boys",
    "Beverly Hills",
    "Bird with a Broken Wing",
    "Buddy Holly",
    "California Kids",
    "Can't Stop Partying",
    "Da Vinci",
    "El Scorcho",
    "Falling For You",
    "Feels Like Summer",
    "Foolish Father",
    "Getchoo",
    "Grapes of Wrath",
    "Hold Me",
    "(If You're Wondering If I Want You To) I Want You To",
    "Island in the Sun",
    "Memories",
    "My Name Is Jonas",
    "No Other One",
    "Numbers",
    "Only in Dreams",
    "Opening Night",
    "Perfect Situation",
    "Pink Triangle",
    "Playing My Piano",
    "Say It Ain't So",
    "The British Are Coming",
    "The Girl Got Hot",
    "The Good Life",
    "The Greatest Man That Ever Lived",
    "The World Has Turned and Left Me Here",
    "Tired Of Sex",
    "Undone (The Sweater Song)",
    "Why Bother?",
    "Zombie Bastards"
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
