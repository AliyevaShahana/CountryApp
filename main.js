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

let limit = 12;
let showArr = data.slice(0, limit);

function getCards(arr = data) {
  cards.innerHTML = "";
  arr.forEach((item) => {
    cards.innerHTML += `
       <div class="w-[292px] shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src="${
              item.flag
            }" alt="" class="object-cover object-center w-full  h-52 dark:bg-gray-500">
            <div class="flex flex-col justify-between p-5 space-y-3 ">
                    <span class="block text-xs  font-medium tracking-widest uppercase font-thin ">${
                      item.region
                    }</span>
                    <h2 class="text-xl font-semibold tracking-wide truncate hover:underline">${
                      item.name
                    }<i>, ${item.capital ? item.capital : ""}</i></h2>
                    <div class="flex justify-between dark:text-gray-800 text-xs">
                        <span>Population: 40218234</span>
                        <span>652230km2</span>
                    </div>
            </div>
        </div>`;
  });
}
getCards(showArr);

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
    flagSection.classList.add("hidden");
    allContinent.classList.remove("underline-violet");
    heading.style.display = "none";
    form.style.display = "none";
    showBtn.style.display = "none";

    const filtered = data.filter(
      (element) => element.region === continent.textContent
    );
    getCards(filtered);

    continents.forEach((item) => {
      continent.classList.add("underline-violet");
      item.classList.remove("underline-violet");
    });
  });
});

allContinent.addEventListener("click", () => {
  showBtn.style.display = "flex";
  heading.style.display = "block";
  form.style.display = "flex";
  flagSection.classList.remove("hidden");
  allContinent.classList.add("underline-violet");
  getCards(showArr);
  continents.forEach((item) => item.classList.remove("underline-violet"));
});

searchBtn.addEventListener("click", () => {
  searchDiv.classList.toggle("hidden");
  flagSection.classList.toggle("hidden");
});

searchInput.addEventListener("input", () => {
  const filtered = data.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(searchInput.value.toLocaleLowerCase())
  );
  getCards(filtered);
});

function random() {
  let ran = Math.floor(Math.random() * data.length);
  randomFlag.innerHTML = `   <img class="object-cover rounded w-[650px]" src="${data[ran].flag}" alt="">
              <div class="w-md p-6 space-y-2 lg:col-span-5 lg:shadow-xl border-b-[2px]  md:border-0 ">
                <h3 class="text-4xl font-semibold">${data[ran].name}</h3>
                <p class="underline text-violet-500 font-bold">${data[ran].region}</p>
                <h4>Capital: ${data[ran].capital}</h4>
                <h4>Area: ${data[ran].area}  km2</h4>
                <h4>Population: ${data[ran].population}</h4>
              </div>
    `;
}
random();


haveLookBtn.addEventListener("click", ()=>{
  window.scroll({
    top: 500,
    left: 0,
    behavior: "smooth",
  });

})