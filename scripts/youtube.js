//Example url
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=eminem&type=video&chart=mostPopular&key=AIzaSyCp5P5MnjVY55AoQt57PgVb8bkIgHxVLIk

const YOUTUBE_API = 'AIzaSyCp5P5MnjVY55AoQt57PgVb8bkIgHxVLIk';
const baseURL = 'https://www.googleapis.com/youtube/v3/search?MISTAKE';
const defaultVideos =
  'https://btwonu.github.io/tribute-page/scripts/data/defaultVideos.json';

//URL configuration
let part = 'snippet';
let maxResults = 5;
let keyword = 'eminem';
let type = 'video';
let chart = 'mostPopular';
let dynamicURL =
  baseURL +
  `part=${part}&maxResults=${maxResults}&q=${keyword}&type=${type}&chart=${chart}&key=${YOUTUBE_API}`;

//Get data
fetch(dynamicURL).then((res) => {
  if (res.status !== 200) {
    console.log('Problem', res.status);

    //Fetch default videos json
    fetch(defaultVideos).then((res) => {
      res.json().then((defaultVideosObj) => {
        let keys = Object.keys(defaultVideosObj);

        keys.forEach((key) => {
          let songName = key;
          let songURL = defaultVideosObj[key];

          renderVideo(songURL);
        });
      });
    });
    return;
  }

  res.json().then((data) => {
    //Experimental
    data.items.forEach((element) => {
      let videoURL = `https://www.youtube.com/embed/${element.id.videoId}`;
      renderVideo(videoURL);
    });
  });
});

//Declarations
// function getVideos(videoArr) {
//   videoArr.forEach((element) => {
//     let videoURL = `https://www.youtube.com/embed/${element.id.videoId}`;
//     renderVideo(videoURL);
//   });
// }

function renderVideo(URL) {
  //Get songs section
  const songsSection = document.querySelector('.songs');
  //Create div
  let div = document.createElement('div');
  div.classList.add('song');
  //Add album to template html
  let html = `<iframe src="${URL}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  //Update empty div
  div.innerHTML = html;
  //Add new album to the end of the section
  songsSection.appendChild(div);
}
