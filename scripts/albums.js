// const albumsURL = './data/albums.JSON';
const albumsURL =
  'https://btwonu.github.io/tribute-page/scripts/data/albums.json';

fetch(albumsURL)
  .then((res) => {
    if (res.status !== 200) {
      console.log('Problem', res.status);
      return;
    }

    //On success
    res.json().then((albumsObj) => {
      let keys = Object.keys(albumsObj);

      keys.forEach((key) => {
        let title = key;
        let info = albumsObj[key].trim();
        let dateReleased = info.split('     ')[0];

        appendAlbums(title, dateReleased);
      });
    });
  })
  .catch((err) => {
    console.log('Fetch Error', err);
  });

//Declarations
function appendAlbums(title, date) {
  //Get discrography section
  const albums = document.querySelector('.discography');
  //Create div
  let div = document.createElement('div');
  div.classList.add('album');
  //Add album to template html
  let html = `
  <h2 class="albumTitle">${title}</h2>
    <p class="albumDate">
      Released: <span>${date}</span>
    </p>
    `;
  //Update empty div
  div.innerHTML = html;
  //Add new album to the end of the section
  albums.appendChild(div);
}
