import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';

const dataCurrentTime = {
  seconds: 0,
};

saveCurrentTime();

const setInLocalStorage = data =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
player.on('timeupdate', throttle(setInLocalStorage, 1000));

function saveCurrentTime() {
  const savedCurrentTime = localStorage.getItem(STORAGE_KEY);
  if (savedCurrentTime) {
    dataCurrentTime.seconds = JSON.parse(savedCurrentTime).seconds;
  }
}

player.setCurrentTime(dataCurrentTime.seconds);
