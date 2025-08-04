const params = new URLSearchParams(window.location.search);
const id = params.get(`id`);
const country = data.find((item) => item.alpha3Code === id);
const cards = document.querySelector(".cards");

cards.innerHTML = ` <img class="object-cover rounded w-[500px]" src="${
  country.flag
}" alt="">
              <div class="w-md p-6 space-y-2 lg:col-span-5 lg:shadow-xl border-b-[2px]  md:border-0 ">
                <h3 class="text-4xl font-semibold">${country.name}  ${
  country.nativeName
} </h3>
                <p class="underline text-violet-500 font-bold"> ${
                  country.region
                }</p>
                <h4>Capital:${country.capital}  </h4>
                <h4>Area: ${country.area.toLocaleString()} km2</h4>
                <h4>Population: ${country.population.toLocaleString()}  </h4>
              </div>
`;
function back(){
    window.history.back()
}