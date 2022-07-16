const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');
const hrsEl = document.getElementById('hrs');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const theLeap = '18 Aug 2023';

function countdown() {
        const theLeapDate = new Date(theLeap);
        const currentDate = new Date();

        const totalSecs = (theLeapDate - currentDate) / 1000;

        const months = Math.floor(totalSecs / 3600 / 730)
        const days = Math.floor(totalSecs / 3600 / 24 / 365);
        const hrs = Math.floor(totalSecs / 3600) % 24;
        const mins = Math.floor(totalSecs / 60) % 60;
        const secs = Math.floor(totalSecs) % 60;

        monthsEl.innerHTML = formatTime(months);
        daysEl.innerHTML = formatTime(days);
        hrsEl.innerHTML = formatTime(hrs);
        minsEl.innerHTML = formatTime(mins);
        secsEl.innerHTML = formatTime(secs);

        console.log(months, days, hrs, mins, secs);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);