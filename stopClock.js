var appends_minutes = document.getElementById("minutes");
var appends_seconds = document.getElementById("seconds");
var btn_start = document.getElementById("start");
var btn_stop = document.getElementById("stop");
var btn_reset = document.getElementById("reset");
var Interval;
var seconds;
var minutes;
window.onload = () => {
    seconds = "00";
    minutes = "00";
};
btn_start.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 1000);
};
btn_stop.onclick = () => {
    clearInterval(Interval);
};
btn_reset.onclick = () => {
    clearInterval(Interval);
    seconds = "00";
    minutes = "00";
    appends_seconds.innerHTML = seconds;
    appends_minutes.innerHTML = minutes;
};
const startTimer = () => {
    seconds++;
    if (seconds <= 9) {
        appends_seconds.innerHTML = "0" + seconds;
    } else if (seconds > 9 && seconds < 60) {
        appends_seconds.innerHTML = seconds;
    } else {
        minutes++;
        if (minutes <= 9) {
            appends_minutes.innerHTML = "0" + minutes;
        } else {
            appends_minutes.innerHTML = minutes;
        }
        seconds = 0;
        appends_seconds.innerHTML = "0" + seconds;
    }
};