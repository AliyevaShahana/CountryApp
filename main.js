const searchBtn = document.getElementById("searchBtn");
const searchDiv = document.getElementById("searchDiv");
const haveLookBtn = document.getElementById("haveLook");
const flagSection = document.getElementById("flagBig");
const continents = document.querySelectorAll("#continent");
const cards = document.querySelector(".cards");
const showBtn = document.querySelector(".showBtn");
const allContinent = document.querySelector("#allContinent");
const heading = document.querySelector(".heading");
const form = document.querySelector("form");
const searchInput = document.querySelector(".searchInput");
const randomFlag = document.querySelector(".randomFlag");
const flag = document.querySelector(".flag");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
const toggle = document.querySelector(".toggle");

let selReg = "";
let limit = 12;
let showArr = data.slice(0, limit);

function getCards(arr = data) {
  cards.innerHTML = "";
  arr.forEach((item) => {
    cards.innerHTML += `
       <div class="w-[292px] shadow-md bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-white">
            <img src="${
              item.flag
            }" alt="" class="object-cover object-center w-full  h-52 dark:bg-gray-500">
            <div onclick="details('${
              item.alpha3Code
            }')" class="cursor-pointer flex flex-col justify-between p-5 space-y-3 ">
                    <span  class="block text-xs  tracking-widest uppercase font-thin dark:text-violet-500 ">${
                      item.region
                    }</span>
                    <h2 class="text-xl font-semibold tracking-wide truncate hover:underline">${
                      item.name
                    }<i>, ${item.capital ? item.capital : ""}</i></h2>
                    <div class="flex justify-between text-gray-800  dark:text-gray-400 text-xs">
                        <span>Population: 40218234</span>
                        <span>652230km2</span>
                    </div>
            </div>
        </div>`;
  });
}
getCards(showArr);

function details(id) {
  window.location.href = `details.html?id=${id}`;
}

function filterData() {
  let filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchInput.value.toLowerCase()) &&
      (!selReg || item.region === selReg)
  );

  if (!selReg) {
    return filtered.slice(0, limit);
  } else {
    return filtered;
  }
}

function updateCards() {
  getCards(filterData());
}

showBtn.addEventListener("click", () => {
  limit += 100;
  showArr = data.slice(0, limit);
  getCards(showArr);

  if (data.length < limit) {
    showBtn.style.display = "none";
    limit = 248;
  }
});

continents.forEach((continent) => {
  continent.addEventListener("click", () => {
    heading.style.display = "none";
    showBtn.style.display = "none";

    // flagSection.classList.add("hidden");
    // form.style.display = "none";
    searchFlag();

    selReg = continent.textContent;
    updateCards();
    random(filtered);

    allContinent.classList.remove("underline-violet");
    continents.forEach((item) => item.classList.remove("underline-violet"));
    continent.classList.add("underline-violet");
  });
});

allContinent.addEventListener("click", () => {
  searchInput.value = "";
  selReg = "";
  limit = 12;
  showBtn.style.display = "flex";
  heading.style.display = "block";
  form.style.display = "flex";

  flagSection.classList.remove("hidden");
  continents.forEach((item) => item.classList.remove("underline-violet"));
  allContinent.classList.add("underline-violet");

  updateCards();
  random(filtered);
});

searchInput.addEventListener("input", updateCards);

searchBtn.addEventListener("click", () => {
  searchDiv.classList.toggle("hidden");
  flagSection.classList.toggle("hidden");
});
function searchFlag() {}
searchFlag();

let filtered = data.filter((item) => !selReg || item.region === selReg);

function random(data) {
  let ran = Math.floor(Math.random() * data.length);

  randomFlag.innerHTML = ` <img  class=" object-cover rounded w-[500px]" src="${data[ran].flag}" alt="">
              <div onclick="details('${data[ran].alpha3Code}')" class="cursor-pointer w-md p-6 space-y-2 lg:col-span-5 shadow-xl border-b-[2px]  md:border-0 text-black bg-gray-200 dark:text-white dark:bg-gray-900">
                <h3 class="text-4xl font-semibold">${data[ran].name}</h3>
                <p class="underline text-violet-500 font-bold">${data[ran].region}</p>
                <h4>Capital: ${data[ran].capital}</h4>
                <h4>Area: ${data[ran].area}  km2</h4>
                <h4>Population: ${data[ran].population}</h4>
              </div>
    `;
}
random(filtered);

flag.addEventListener("click", () => {
  random(filtered);
});

haveLookBtn.addEventListener("click", () => {
  window.scroll({
    top: 500,
    left: 0,
    behavior: "smooth",
  });
});

let check = false;

toggle.addEventListener("click", () => {
  toggle.innerHTML = check
    ? `   <i class="right-10 top-5 absolute  fa-solid fa-sun text-2xl"></i>`
    : `<i class="right-10 top-5 absolute z-10  fa-solid fa-moon text-2xl "></i>  `;
  check = !check;

  document.documentElement.classList.toggle("dark");
});
