let NumberOfSeries;
function func1(params) {
  NumberOfSeries = +prompt("nechta serial ko'rdingiz", "");
  while (
    NumberOfSeries == "" ||
    NumberOfSeries == null ||
    NumberOfSeries == isNaN
  ) {
    NumberOfSeries = +prompt("nechta serial ko'rdingiz", "");
  }
}
func1();

let seriesDB = {
  count: NumberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};
function func2() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan serialingiz", ""),
      b = +prompt("Nechi baho berasiz", "");

    if (a != "" && b != null && a != null && b != "") {
      seriesDB.series[a] = b;
    } else {
      i--;
    }
  }
}
func2();

function detect() {
  if (seriesDB.count == 5) {
    console.log("Kam serial ko'ribsiz");
  } else if (seriesDB.count > 5 && seriesDB.count < 10) {
    console.log("classic");
  } else {
    console.log("serialchi zvezda ekansiz");
  }
}
detect();

function showDb() {
  if (!seriesDB.private) {
    console.log(seriesDB);
  }
}
showDb();

function genre() {
  for (let i = 1; i < 4; i++) {
    const genre = prompt(`Yaxshi ko'rgan janringiz ${i}`);
    seriesDB.genres[i] = genre;
  }
}
genre();
