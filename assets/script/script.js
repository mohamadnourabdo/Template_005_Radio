// Start Radio
let pre = document.getElementById("pre");
let playPause = document.getElementById("play-pause");
let next = document.getElementById("next");
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let speed = document.getElementById("speed");
let volume = document.getElementById("volume");
let isPlay = false;
let radios = [
  "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3",
  "https://streaming.shoutcast.com/alrasheed-fm",
  "https://stream.radiojar.com/8s5u5tpdtwzuv",
];
let radioNames = ["راديو عراقي", "راديو أغاني", "راديو قرآن كريم"];
let position = 0;
playPause.addEventListener("click", () => {
  if (isPlay === false) {
    playPause.src = "assets/img/2.png";
    isPlay = true;
    audio.src = radios[position];
    title.innerHTML = radioNames[position];
    audio.play();
  } else {
    playPause.src = "assets/img/1.png";
    isPlay = false;
    audio.pause();
  }
  localStorage.setItem("radio", position);
});

function nextAudio() {
  if (position === radios.length - 1) {
    position = 0;
    audio.src = radios[position];
    title.innerHTML = radioNames[position];
    audio.play();
    isPlay = true;
    playPause.src = "assets/img/2.png";
  } else {
    position++;
    audio.src = radios[position];
    title.innerHTML = radioNames[position];
    audio.play();
    isPlay = true;
    playPause.src = "assets/img/2.png";
  }
  localStorage.setItem("radio", position);
}
function preAudio() {
  if (position === 0) {
    position = radios.length - 1;
    audio.src = radios[position];
    title.innerHTML = radioNames[position];
    audio.play();
    isPlay = true;
    playPause.src = "assets/img/2.png";
  } else {
    position--;
    audio.src = radios[position];
    title.innerHTML = radioNames[position];
    audio.play();
    isPlay = true;
    playPause.src = "assets/img/2.png";
  }
  localStorage.setItem("radio", position);
}
pre.addEventListener("click", function () {
  preAudio();
});
next.addEventListener("click", function () {
  nextAudio();
});
speed.addEventListener("change", function () {
  audio.playbackRate = speed.value / 100;
});
volume.addEventListener("change", function () {
  audio.volume = volume.value / 100;
});

onload = function () {
  if (this.localStorage.getItem("radio") !== null) {
    title.innerHTML = radioNames[this.localStorage.getItem("radio")];
    position = this.localStorage.getItem("radio");
    audio.src = radios[position];
  }
};
// End Radio
