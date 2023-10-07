// const btn = document.querySelector(`#ssa`);
// btn.onclick = function () {
//   alert("Ok");
// };
// const btns = document.querySelector("#bbh");
// btns.addEventListener(`mouseenter`, () => {
//   alert("okey");
// });

const btns = document.querySelectorAll("button");
btns.forEach((item) => {
  item.addEventListener(
    "click",
    () => {
      console.log(9);
    },
    { once: true }
  );
});
