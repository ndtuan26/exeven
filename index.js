//  ex6
var btnBlue = document.querySelector("div#ex6 button#js-btn-blue")
var btnRed = document.querySelector("div#ex6 button#js-btn-red")
var eX = document.getElementById("ex6")
btnBlue.addEventListener("click", () => {
    eX.style.backgroundColor = "blue";
})

btnRed.addEventListener("click", () => {
    eX.style.backgroundColor = "red";
})
//   ex10
var btnShow = document.querySelector("div#ex10 button#js-btn-show")
var div10 = document.querySelector("div#ex10 div#div10")
var clicks = 0;
btnShow.addEventListener('click', function () {
    clicks += 1;
    if (clicks % 2 !== 0) {
        div10.style.height = "auto"
        btnShow.innerHTML = "Show less"
    } else {
        div10.style.height = "43px"

        btnShow.innerHTML = "Show more "
    }

})

// ex 13
var sec = 0;
var min = 0;
var hour = 0;

var timer,
 timer_el = document.getElementById("timer")
function timerHandler() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
       mii=n = 0;
        hour++;
    }
    DisplayTimer();
}
// setInterval(timerHandler, 1000)



function DisplayTimer() {
    var formatHour = hour,
        formatMin = min,
        formatSec = sec;
    if (sec < 10) {
        formatSec = "0" + sec
    }

    if (min < 10) {
        formatMin = "0" + min
    }

    if (hour < 10) {
        formatHour = "0" + hour
    }
    timer_el.innerHTML = formatHour + ":" + formatMin + ":" + formatSec;
}
var btnStart = document.getElementById("start")
var btnPause = document.getElementById("pause")
var btnReset = document.getElementById("reset")

btnStart.addEventListener("click", () => {
    timer = setInterval(timerHandler, 1000)
    btnReset.disabled = false;
});
btnPause.addEventListener("click", () => {
    timer = clearInterval(timer);
    btnReset.disabled = false;
});
btnReset.addEventListener("click", () => {
    timer = clearInterval(timer);
    sec = 0;
    min = 0;
    hour = 0;
    timer_el.innerHTML = "00:00:00"
    btnReset.disabled = true;
})

