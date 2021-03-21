# pure-data-store

A Simple Data State Management implementation for data-oriented applications powered by RxJS Observables.

Start by importing ```DataStore```.
```
import { DataStore } from 'pure-data-store';
```

Create a store with:
```
const store = new DataStore({
  source: of([1, 2, 3]),
});
```

Fetch the data by chaining or subscribing from ```.all$``` observable.
```
store.all$.pipe(
  tap(res => console.table(res))
);

// or

store.all$.subscribe(res => console.table(res));
```

The store serves from it's cache always.\
If there's a need to refetch from source, ```.refresh()``` can be called.
```
store.refresh();
```
