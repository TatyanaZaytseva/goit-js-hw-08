import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time'

const dataCurrentTime = {
    duration: 0,
    percent: 0,
    seconds: 0,
}

saveCurrentTime()

const setInLocalStorage = (data) => localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
player.on('timeupdate', throttle(setInLocalStorage ,1000))

function saveCurrentTime() {
    const savedCurrentTime = localStorage.getItem(STORAGE_KEY)
    if (savedCurrentTime) {
        dataCurrentTime.seconds = JSON.parse(savedCurrentTime).seconds;
        dataCurrentTime.percent = JSON.parse(savedCurrentTime).percent;
        dataCurrentTime.duration = JSON.parse(savedCurrentTime).duration;
    }
}

player.setCurrentTime(dataCurrentTime.seconds);
