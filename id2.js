const NumberOfSeries = +prompt("nechta serial ko'rdingiz", "");

console.log(typeof NumberOfSeries);

seriesDB = {
  count: NumberOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

const a = prompt("Oxirgi ko'rgan serialingiz", ""),
  b = +prompt("Nechi baho berasiz", ""),
  c = prompt("Oxirgi ko'rgan serialingiz", ""),
  d = +prompt("Nechi baho berasiz", "");
seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);
