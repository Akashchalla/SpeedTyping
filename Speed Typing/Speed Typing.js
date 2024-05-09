let timer = document.getElementById('timer');
let submit = document.getElementById('submitBtn');
let reset = document.getElementById('resetBtn');
let para = document.getElementById('quoteDisplay');
let userentered = document.getElementById('quoteInput');
let result = document.getElementById('result');
let spinnerEl = document.getElementById("spinner");

function nachi() {
    spinnerEl.classList.remove("d-none");
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            para.textContent = jsonData.content;
        });
}
nachi();



let count = 0;
let time = setInterval(function() {
    timer.textContent = count + " seconds";
    count = count + 1;

}, 1000);
submit.onclick = function() {
    if (para.textContent === userentered.value) {
        clearInterval(time);
        let count1 = count - 1;
        result.textContent = "you typed in" + " " + count1 + " " + "seconds";
    } else {
        result.textContent = "try again";
    }
};

reset.onclick = function() {
    count = 0;

    spinnerEl.classList.add("d-none");
    nachi();
};