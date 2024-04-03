console.log("welcome to spotify");
// Iniltialize the variables
let songindex = 0;
let audioelement = new Audio('kasongs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songsItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songname: "52-bars", filepath: "kasongs/1.mp3", coverpath: "covers/c1.jpg" },
    { songname: "Bachke Bachke", filepath: "kasongs/2.mp3", coverpath: "covers/c2.jpg" },
    { songname: "Fallin Apart", filepath: "kasongs/3.mp3", coverpath: "covers/c1.jpg" },
    { songname: "Nothing Lasts", filepath: "kasongs/4.mp3", coverpath: "covers/c3.jpg" },
    { songname: "Softly", filepath: "kasongs/5.mp3", coverpath: "covers/c2.jpg" },
    { songname: "Take It Easy", filepath: "kasongs/6.mp3", coverpath: "covers/c1.jpg" },
    { songname: "You", filepath: "kasongs/7.mp3", coverpath: "covers/c2.jpg" },
]

songsItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

// audiolement.play();

// handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// listen to events
audioelement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `kasongs/${songindex + 1}.mp3`;
        mastersongname.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})


// next button code
document.getElementById("next").addEventListener('click', () => {
    if (songindex >= 6) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `kasongs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

// previous button code

document.getElementById("previous").addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `kasongs/${songindex + 1}.mp3`;
    mastersongname.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})