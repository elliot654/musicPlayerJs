let track_name = document.querySelector(".track-name");
let song_list = document.querySelector("#songList");

let track_index = 0;

let curr_track = document.createElement('audio');

let track_list = [
    {
      name: "dancel",
      path: "dance.mp3"
    }
	//add a file dialogue here
];

function loadTrack(track_index) {
 
    curr_track.src = track_list[track_index].path;
    curr_track.load();
  
    track_name.textContent = "PLAYING " + track_list[track_index].name;
    song_list.appendChild(populate_list());
    document.querySelector("#headphones").classList.add("pulse");
  
  }


  loadTrack(track_index);

function playAudio() {
  curr_track.play();
  
}

function pauseAudio() {
  curr_track.pause();
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
 
  loadTrack(track_index);
  playAudio();
}
 
function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
   
  loadTrack(track_index);
  playAudio();
}

function populate_list(track_index) {
  const list = document.createElement("ol");
  for (let i = 0; i < track_list.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(track_list[i].name));
    list.appendChild(item);
  }
  return list;
}