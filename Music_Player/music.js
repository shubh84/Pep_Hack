const music = document.querySelector("audio");
const play = document.getElementById("play");
const img = document.querySelector('img');

const songName = document.getElementById("songName");
const artistName = document.getElementById("artistName");
const prev = document.getElementById("prev");
const next = document.getElementById("next");











const songs = [
    {
        id: 'FRIENDS',
        songName: 'FRIENDS',
        artistName:' Marshmello | Anne-Marie'
    },
    {
        id: 'G.O.A.T',
        songName: 'G.O.A.T',
        artistName:'Diljit Dosanjh '
    },
    
    {
        id: 'LOVELY',
        songName: 'LOVELY',
        artistName:'Billie Elish'
    },
    {
        id: 'Brown Munde',
        songName: 'Brown Munde',
        artistName:'AP DHILLON | GURINDER GILL | SHINDA KAHLON'
    },
    {
        id: 'Love Me Like You Do',
        songName: 'Love Me Like You Do',
        artistName:'Ellie Goulding  '
    },
  
    {
        id: 'Shape of You',
        songName: 'Shape of You',
        artistName:'Ed Sheeran '
    },
    
    
]

//functions for playing and pausing

let isAudioPlaying = false;

const playTheMusic = ()=>{
    isAudioPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("rotateAnime");
};

//pause function
const pauseTheMusic = ()=>{
    isAudioPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("rotateAnime");
};

//event is firing on clikcing play button
play.addEventListener("click", ()=>{
  
    isAudioPlaying ? pauseTheMusic() : playTheMusic();

});


//changing the songs

const loadTheSong = (songs)=>{
    songName.textContent = songs.songName;
    artistName.textContent = songs.artistName;
    music.src = "music/" + songs.id + ".mp3";
    img.src = "img/" + songs.id + ".jpg";
}

songIndex = 0;
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
};

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadTheSong(songs[songIndex]);
    playTheMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

