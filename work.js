const urlParams = new URLSearchParams(window.location.search);

let name_f = urlParams.get("f");
let name_s = urlParams.get("s");

let searchBy = "f";
let searchValue = "a";

if (name_f) {
  searchBy = "f";
  searchValue = name_f;
}
if (name_s) {
  searchBy = "s";
  searchValue = name_s;
}

let API = `https://www.themealdb.com/api/json/v1/1/search.php?${searchBy}=${searchValue}`;

let input = document.getElementById("search");

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    let small = input.value.toLowerCase();

    window.location.href = `work.html?s=${small}`;
  }
});

let meals = document.querySelector(".meals");

async function getService() {
  try {
    const res = await fetch(API);
    const data = await res.json();
    showService(data.meals);

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getService();

function showService(data) {
  console.log(data);
  let showData = data.map((item) => {
    return ` 
        <div onclick="goToMeal('${item.idMeal}')" class="product"> 
            <img src="${item.strMealThumb}" alt=""/> 
            <p>${item.strMeal}</p> 
        </div> 
        `;
  });
  meals.innerHTML = showData.join("");
}

function goToMeal(id) {
  //   alert(id);
  window.location.href = `meal.html?id=${id}`;
}

let letter = document.querySelector(".letter");

let arrayLetter = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

letter.innerHTML = arrayLetter
  .map((item) => {
    return `
        <a onclick="setLetter('${item}')">${item}/</a>
    `;
  })
  .join("");

function setLetter(item) {
  let small = item.toLowerCase();

  window.location.href = `work.html?f=${small}`;
}
