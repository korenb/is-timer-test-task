moment.locale('ru');
moment.relativeTimeThreshold('s', 61);
moment.relativeTimeThreshold('ss', -1);
moment.relativeTimeThreshold('m', 60);
moment.relativeTimeThreshold('h', 24);
moment.relativeTimeThreshold('d', 31);
moment.relativeTimeThreshold('M', 12);
let startDate = moment([2018, 9, 10, 18, 20, 0, 0]);
let el = document.getElementById('is-timer');

function Timer() {
    let tick = () => {
        let remaining = startDate.diff(moment());

        if (remaining <= 1000) {
            clearInterval(timerId);
            UpdateView('Вы опоздали :(');
            return;
        }

        let duration = moment.duration(remaining);
        UpdateView(stringifyDuration(duration));
    }
    tick();
    let timerId = setInterval(_ => {
        tick();
    }, 1000);
}

function UpdateView(content) {
    el.innerHTML = content;
}

function stringifyDuration(duration) {
    let days = moment.duration(duration.days(), 'd').humanize();
    let hours = moment.duration(duration.hours(), 'h').humanize();
    let minutes = moment.duration(duration.minutes(), 'm').humanize();
    let seconds = moment.duration(duration.seconds(), 's').humanize();
    if (!duration.seconds()) {
        seconds = '0 секунд';
    }
    return `${days} ${hours} ${minutes} ${seconds}`;
}

Timer();