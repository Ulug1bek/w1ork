var NumberOfSeries = +prompt("nechta serial ko'rdingiz", "");
console.log(typeof NumberOfSeries);

seriesDB = {
  count: NumberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt("Oxirgi ko'rgan serialingiz", ""),
    b = +prompt("Nechi baho berasiz", "");

  if (a != "" && b != null && a != null && b != "") {
    seriesDB.series[a] = b;
  } else {
    i--;
  }
}

if (seriesDB.count == 5) {
  console.log("Kam serial ko'ribsiz");
} else if (seriesDB.count > 5 && seriesDB.count < 10) {
  console.log("classic");
} else {
  console.log("serialchi zvezda ekansiz");
}
console.log(seriesDB);
