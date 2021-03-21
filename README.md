# pure-data-store

A Simple Data State Management implementation for data-oriented applications powered by RxJS Observables.

# Usage

- Start by importing ```DataStore```.
```
import { DataStore } from 'pure-data-store';
```

- Create a store with:
```
const store = new DataStore({
  source: of([1, 2, 3]),
});
```

- Fetch the data by chaining or subscribing from ```.all$``` observable.
```
store.all$.pipe(
  tap(res => console.log(res))
);

// or

store.all$.subscribe(res => console.log(res));
```

- The store always serve from it's cache.\
If there's a need to refetch from source, ```.refresh()``` can be called and the new data will be fetched on the next subscription.
```
store.refresh();
```
