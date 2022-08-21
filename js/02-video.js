import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');


const dataCurrentTime = {
duration: 0,
percent: 0,
seconds: 0,
}
saveCurrentTime()
    player.on('timeupdate', throttle((data) => localStorage.setItem('videoplayer-current-time', JSON.stringify(data)),1000));

function saveCurrentTime() {
    const savedCurrentTime = localStorage.getItem('videoplayer-current-time')
    if (savedCurrentTime) {
        dataCurrentTime.seconds = JSON.parse(savedCurrentTime).seconds;
        dataCurrentTime.percent = JSON.parse(savedCurrentTime).percent;
        dataCurrentTime.duration = JSON.parse(savedCurrentTime).duration;
    }
}

player.setCurrentTime(dataCurrentTime.seconds);
