
////////////////code by saeid nikseresht///////////////
//Define a Variable
let audio, playBtn, nextBtn, prevBtn, playlist_index, title,
    poster, artists, muteBtn, scrollSlider, volumeSlider,
    scrollTo, scrolling = false, currentTimeText,
    durationTimeText, playlist_status, dir
    , playlist, ext, playlist_artist, repeat, randomSong;

//============================================
dir = "musics/";
playlist = ["Saeid - nikseresht - Setareh", "Ebi - Chizi Begoo", "Ebi - Mohtaj" , "Ebi -  Harighe Sabz" , "Hayedeh - Ey Khoda", "Googoosh-Noghteye-Payan", "Habib - Kavire Bavar"];
title = ["Setareh", "Chizi Begoo", "Mohtaj", "Harighe Sabz", "Ey Khoda", "Noghteye-Payan", "Kavire Bavar"];
artists = ["Saeid - nikseresht", "Ebi", "Ebi", "Ebi", "Hayedeh", "Googoosh", "Habib"];
poster = ["images/خودم.jpg", "images/ابی 1.jpeg", "images/ابی 2.jpeg", "images/ابی-خواننده-ایرانی.jpg", "images/هایده.jpeg", "images/گوگوش.jpeg", "images/حبیب.jpeg"];
ext = ".mp3";
//============================================
playBtn = document.getElementById("playPauseBtn");
nextBtn = document.getElementById("nextBtn");
prevBtn = document.getElementById("prevBtn");
muteBtn = document.getElementById("muteBtn");
scrollSlider = document.getElementById("scrollSlider");
volumeSlider = document.getElementById("volumeSlider");
currentTimeText = document.getElementById("currentTimeText");
durationTimeText = document.getElementById("durationTimeText");
playlist_artist = document.getElementById("playlist_artist");
playlist_status = document.getElementById("playlist_status");
repeat = document.getElementById("repeat");
randomSong = document.getElementById("random");
//============================================
playlist_index = 0;
//Audio Object
audio = new Audio();
audio.src = dir + playlist[0] + ext;
audio.loop = false;
//First Song Title and Artist
playlist_status.innerHTML = title[playlist_index];
playlist_artist.innerHTML = artists[playlist_index];
//====================Events========================
//Add Event Handling
playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
muteBtn.addEventListener("click", mute);
scrollSlider.addEventListener('mousedown', function (event) {
    scrolling = true;
    scroll(event);
});
scrollSlider.addEventListener('mousemove', function (event) {
    scroll(event);
});
scrollSlider.addEventListener('mouseup', function (event) {
    scrolling = false;
});
volumeSlider.addEventListener('mousemove', setVolume);
audio.addEventListener("timeupdate", function () {
    scrollTimeUpdate();
});
audio.addEventListener("ended", function () {
    switchTrack();
});
repeat.addEventListener('click', loop);
randomSong.addEventListener('click', random);

//======================Functions======================
function fetchMusicDetails() {
    $("#playPauseBtn img").attr("src", "images/pause-red.png");
    $("#bgImage").attr("src", poster[playlist_index]);
    $("#image").attr("src", poster[playlist_index]);
    playlist_status.innerHTML = title[playlist_index];
    playlist_artist.innerHTML = artists[playlist_index];
    audio.src = dir + playlist[playlist_index] + ext;
    audio.play();
}

function playPause() {
    if (audio.paused) {
        audio.play();
        $("#playPauseBtn img").attr("src", "images/pause-red.png");
    } else {
        audio.pause();
        $("#playPauseBtn img").attr("src", "images/play-red.png");
    }
}

function nextSong() {
    playlist_index++;
    if (playlist_index > playlist.length - 1) {
        playlist_index = 0;
    }
    fetchMusicDetails();
}

function prevSong() {
    playlist_index--;
    if (playlist_index < 0) {
        playlist_index = playlist.length - 1;
    }
    fetchMusicDetails();
}

function mute() {
    if (audio.muted) {
        audio.muted = false;
        $("#muteBtn img").attr("src", "images/speaker.png");
    } else {
        audio.muted = true;
        $("#muteBtn img").attr("src", "images/mute.png");
    }
}

function scroll(event) {
    if (audio.duration == 0) {
        null;
    } else {
        if (scrolling) {
            scrollSlider.value = event.clientX - scrollSlider.offsetLeft;
            scrollTo = audio.duration * (scrollSlider.value / 100);
            audio.currentTime = scrollTo;
        }
    }
}

function setVolume() {
    audio.volume = volumeSlider.value / 100;
}

function scrollTimeUpdate() {
    if (audio.duration) {
        let updateScroll = audio.currentTime * (100 / audio.duration);
        scrollSlider.value = updateScroll;
        var currentMins = Math.floor(audio.currentTime / 60);
        var currentSecs = Math.floor(audio.currentTime - currentMins * 60);
        var durationMins = Math.floor(audio.duration / 60);
        var durationSecs = Math.floor(audio.duration - durationMins * 60);
        if (currentSecs < 10) {
            currentSecs = "0" + currentSecs;
        }
        if (currentMins < 10) {
            currentMins = "0" + currentMins;
        }
        if (durationSecs < 10) {
            durationSecs = "0" + durationSecs;
        }
        currentTimeText.innerHTML = currentMins + ":" + currentSecs;
        durationTimeText.innerHTML = durationMins + ":" + durationSecs;
    } else {
        currentTimeText.innerHTML = "00" + ":" + "00";
        durationTimeText.innerHTML = "00" + ":" + "00";
    }
}

function switchTrack() {
    if (playlist_index == (playlist.length - 1)) {
        playlist_index = 0;
    } else {
        playlist_index++;
    }
    fetchMusicDetails();
}

function loop() {
    if (audio.loop) {
        audio.loop = false;
        $("#repeat img").attr("src", "images/rep.png");
    } else {
        audio.loop = true;
        $("#repeat img").attr("src", "images/rep1.png");
    }
}

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function random() {
    let randomIndex = getRandomNumber(0, playlist.length - 1);
    playlist_index = randomIndex;
    fetchMusicDetails();
}

//////////login////////
const vin = document.getElementById('but')
const form = document.getElementById('for')
const spa = document.getElementById('spa')


vin.addEventListener('click', () => {
  form.style.opacity = '1'

})

spa.addEventListener('click', ()=>{
  form.style.transform = 'translateY(-1000px)'
})


/////////////login////////////////

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 

  // const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('pass').value; 
 


  // نمایش پیام موفقیت
  document.getElementById('message').innerText = 'ثبت‌نام با موفقیت انجام شد!';
  
  // پاک کردن فرم
  document.getElementById('form').reset();
});


/////////////////////foter drag and drop/////////////////
const foter = document.querySelector('.parent')
// console.log(foter);
foter.addEventListener('mousedown', ()=>{
    window.addEventListener('mousemove', para)

})
foter.addEventListener('mouseup', ()=>{
    window.removeEventListener('mousemove', para)
})

function para(e){
    // console.log(e.clientX);
    // console.log( parent.classList.add('pos'));
    
    foter.classList.add('pos')
    foter.style.top =e.clientY +'px'
    foter.style.left =e.clientX +'px'
}



