const Mirzobek = {
  jacket: "black",
  height: 1.7,
  color: {
    is: "black",
    style: "tekis",
  },
};

for (let key in Mirzobek) {
  if (typeof Mirzobek[key] === "object") {
    for (let ke2 in Mirzobek[key]) {
      console.log(`property is ${ke2} vlaue ${Mirzobek[key][ke2]}`);
    }
  } else {
    console.log(`property is ${key} value ${Mirzobek[key]}`);
  }
}
