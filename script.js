function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() +
        new Date().getMinutes() * 60 +
        new Date().getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var secondsHand = document.getElementById('seconds');
    var minutesHand = document.getElementById('minutes');
    var hourHand = document.getElementById('hour');

    var secondsDeg = (time % 60) * 6;
    var minutesDeg = ((time / 60) % 60) * 6;
    var hourDeg = ((time / 3600) % 12) * 30;

    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

}, 1000);