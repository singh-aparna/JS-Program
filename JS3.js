//Throttle limits a function to run at most once in a specified time,
//Debounce delays a function until a certain time has passed since the last call.

//Search Input: Debounce can be used to delay an API call until the user stops typing for,
//say, 300ms, to avoid firing a request on every keystroke.

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
    };
}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", debounce(function (e) {
    console.log("API call for:", e.target.value);
}, 500));


function throttle(func, limit) {
    let inThrottle = false;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const handleScroll = () => {
    console.log("Scroll event triggered");
};

const throttledScroll = throttle(handleScroll, 200);

// You'd typically attach this to a scroll event like:
// window.addEventListener("scroll", throttledScroll);
