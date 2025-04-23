//Throttle limits a function to run at most once in a specified time,
//while debounce delays a function until a certain time has passed since the last call.

function debounce(fn, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", debounce(function (e) {
  console.log("API call for:", e.target.value);
}, 500));
