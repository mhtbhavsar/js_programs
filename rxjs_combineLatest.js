import { timer, combineLatest } from 'rxjs';

const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
const secondTimer = timer(1000, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
const thirdTimer = timer(2000, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
const combinedTimers = combineLatest([firstTimer, secondTimer, thirdTimer]);
combinedTimers.subscribe(value => console.log(value[0] + value[1] + value[2]));