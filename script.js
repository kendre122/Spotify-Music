//Inlitialize the variable
let songsindex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Tera fitoor",filepath:"music/1.mp3",coverpath:"cover/1.jpg"},
    {songName:"sanam re",filepath:"music/2.mp3",coverpath:"cover/2.jpg"},
    {songName:"ye akhe dek kar",filepath:"music/3.mp3",coverpath:"cover/3.jpg"},
    {songName:"Dil meri na sune",filepath:"music/4.mp3",coverpath:"cover/4.jpg"},
    {songName:"Ha ho gayi galati",filepath:"music/5.mp3",coverpath:"cover/5.jpg"},
    {songName:"Hamari adhuri kahani",filepath:"music/6.mp3",coverpath:"cover/6.jpg"},
    {songName:"Hat ja samne se",filepath:"music/7.mp3",coverpath:"cover/7.jpg"},
    {songName:"main hu chand",filepath:"music/8.mp3",coverpath:"cover/8.jpg"},
    {songName:"zoroot he",filepath:"music/9.mp3",coverpath:"cover/9.jpg"},
    {songName:"Kali kali zulfon",filepath:"music/10.mp3",coverpath:"cover/10.jpg"},
]
songItem.forEach((element,i)=>{
    // console.log(element,i);
   // element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


//audioElement.playbackRate();
 masterplay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
         gif.style.opacity = 1; 

     }
     else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0 ;
     }
 })
//listen to event            
audioElement.addEventListener('timeupdate',()=>{
  
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songsindex = parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songsindex+1}.mp3`;
        masterSongName.innerText = songs[songsindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songsindex >= 9){
        songsindex = 0;
    }
    else{
        songsindex += 1;
    }
    audioElement.src = `songs/${songsindex+1}.mp3`;
    masterSongName.innerText = songs[songsindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songsindex < 0){
        songsindex = 0;
    }
    else{
        songsindex -=1;
    }
    audioElement.src = `songs/${songsindex+1}.mp3`;
        audioElement.currentTime = 0;
        masterSongName.innerText = songs[songsindex].songName;
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
})