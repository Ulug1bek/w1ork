let seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    seriesDB.count = +prompt("nechta serial ko'rdingiz", "");
    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      seriesDB.count == isNaN
    ) {
      seriesDB.count = +prompt("nechta serial ko'rdingiz", "");
    }
  },
  remember: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan serialingiz", ""),
        b = +prompt("Nechi baho berasiz", "");

      if (a != "" && b != null && a != null && b != "") {
        seriesDB.series[a] = b;
      } else {
        i--;
      }
    }
  },
  detect: function () {
    if (seriesDB.count == 5) {
      console.log("Kam serial ko'ribsiz");
    } else if (seriesDB.count > 5 && seriesDB.count < 10) {
      console.log("classic");
    } else {
      console.log("serialchi zvezda ekansiz");
    }
  },
  visibleDB: function () {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
  showDb: function () {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
  },
  genre() {
    for (let i = 1; i < 4; i++) {
      const genre = prompt(`Yaxshi ko'rgan janringiz ${i}`);
      seriesDB.genres[i] = genre;
      if (genre != "" && genre != null) {
        seriesDB.genres[i] = genre;
      } else {
        i--;
      }
    }
  },
};
