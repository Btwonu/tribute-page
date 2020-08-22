fetch('./data/albums.JSON')
  .then((res) => {
    if (res.status !== 200) {
      console.log('Problem', res.status);
      return;
    }

    res.json().then((data) => {
      console.log(data);
    });
  })
  .catch((err) => {
    console.log('Fetch Error', err);
  });
