const Mirzobek = {
  jacket: "black",
  height: 1.7,
  color: {
    is: "black",
    style: "tekis",
  },
  qanday: function qochdi() {
    console.log("tez eshik orqali");
  },
};

Mirzobek.qanday();

for (let key in Mirzobek) {
  if (typeof Mirzobek[key] === "object") {
    for (let ke2 in Mirzobek[key]) {
      console.log(`property is ${ke2} vlaue ${Mirzobek[key][ke2]}`);
    }
  } else {
    console.log(`property is ${key} value ${Mirzobek[key]}`);
  }
}
