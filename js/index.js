let playit = document.getElementById('playbtn');
let audio = new Audio('../songs/1.mp3');
let musicbar = document.getElementById('musicbar');
let cd = document.getElementById('cd');
let Sname = document.getElementById('Sname');
let songnm = document.getElementsByClassName('songnm');
let gif = document.getElementById('gif');
let forward = document.getElementById('forward');
let songs = document.getElementById('songs');
let musicList = document.getElementById('musicList');
let musicPlay = document.getElementById('musicPlay');
let home = document.getElementById('home');
let songIndex = 0;

let songsArray = [
  {
    songName: "Meri Maa Ke Barabar Koi Nahi", songid: '1', songpath: "../songs/1.mp3",coverPath:"../cover/1.jpg"
  },
  {
    songName: "Oo Kanha Ab To Murli Ki", songid: '2', songpath: "../songs/2.mp3",coverPath:"../cover/2.jpg"
  },
  {
    songName: "Mayday - Fat Rat", songid: '3', songpath: "../songs/3.mp3",coverPath:"../cover/3.jpg"
  },
  {
    songName: "Let Me Love You", songid: '4', songpath: "../songs/4.mp3",coverPath:"../cover/4.jpg"
  },
  {
    songName: "Senorita", songid: '5', songpath: "../songs/5.mp3",coverPath:"../cover/5.jpg"
  },
  {
    songName: "Shape Of You", songid: '6', songpath: "../songs/6.mp3",coverPath:"../cover/6.jpg"
  },
  {
    songName: "Ignite", songid: '7', songpath: "../songs/7.mp3",coverPath:"../cover/7.jpg"
  },
  {
    songName: "On My Way", songid: '8', songpath: "../songs/8.mp3",coverPath:"../cover/8.jpg"
  },
  {
    songName: "Faded", songid: '9', songpath: "../songs/9.mp3",coverPath:"../cover/9.jpg"
  }
  ,
  {
    songName: "Let Me Down Slowly", songid: '10', songpath: "../songs/10.mp3",coverPath:"../cover/10.jpg"
  }
]

playit.addEventListener('click', () => {
  Sname.innerText = songsArray[songIndex].songName;
  if (playit.classList.contains('fa-circle-play')) {
    playit.classList.remove('fa-circle-play');
    playit.classList.add('fa-circle-pause');
    audio.play();
    gif.style.opacity = 1;
    cd.style.animation = 'rotation 20s infinite linear'
  }

  else if (playit.classList.contains('fa-circle-pause')) {
    playit.classList.remove('fa-circle-pause');
    playit.classList.add('fa-circle-play');
    gif.style.opacity = 0;
    audio.pause();
    cd.style.animation = 'none';
  }
})

// let song = document.getElementById('1');
// song.addEventListener('click',()=>{
//     playit.classList.remove('fa-circle-play');
//     playit.classList.add('fa-circle-pause');
//     audio.play();
// })

audio.addEventListener('timeupdate', () => {
  progress = parseInt((audio.currentTime / audio.duration) * 100);
  // console.log(progress);
  musicbar.value = progress;
})

musicbar.addEventListener('change', () => {
  audio.currentTime = musicbar.value * audio.duration / 100;
})

//taking the array as input for the songList

Array.from(document.getElementsByClassName('songList')).forEach((element) => {
  element.addEventListener('click', (e) => {
   songIndex = parseInt(e.target.id) - 1;
    
    audio.src = songsArray[songIndex].songpath;
    audio.play();
    playit.classList.remove('fa-circle-play');
    playit.classList.add('fa-circle-pause');
    cd.src = songsArray[songIndex].coverPath;
    gif.style.opacity = 1;
    cd.style.animation = 'rotation 20s infinite linear';
    Sname.innerText = songsArray[songIndex].songName;

  })

})

songs.addEventListener('click', () => {
  musicList.style.display = 'flex';
  musicPlay.style.display = 'none';

})

document.getElementById('playicon').addEventListener('click', () => {
  musicPlay.style.display = 'flex';
  musicList.style.display = 'none';
})

home.addEventListener('click', () => {
  musicList.style.display = 'flex';
  musicPlay.style.display = 'flex';
  musicList.style.width = '50%';
  musicPlay.style.width = '50%';
})

forward.addEventListener('click', () => {

  console.log(songIndex);
songIndex = songIndex + 1;
if(songIndex > songsArray.length -1 ) songIndex = 0;
console.log(songIndex)
audio.src = songsArray[songIndex].songpath;
cd.src = songsArray[songIndex].coverPath;
audio.play();
Sname.innerText = songsArray[songIndex].songName;
cd.style.animation = 'rotation 20s infinite linear';
playit.classList.remove('fa-circle-play');
playit.classList.add('fa-circle-pause');

})

document.getElementById('back').addEventListener('click',()=>{
  
  
  songIndex = songIndex - 1;
  if(songIndex < 0) songIndex = songsArray.length - 1;
  audio.src = songsArray[songIndex].songpath;
  cd.src = songsArray[songIndex].coverPath;
  audio.play();
  Sname.innerText = songsArray[songIndex].songName;
  cd.style.animation = 'rotation 20s infinite linear';
  playit.classList.remove('fa-circle-play');
  playit.classList.add('fa-circle-pause');
})
