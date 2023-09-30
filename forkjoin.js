import { forkJoin, of, timer } from 'rxjs';

const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(1000),
  caz: timer(3000),
  taz: of(5)
});
observable.subscribe({
 next: value => console.log(value),
 complete: () => { console.log('This is how it ends!')},
});