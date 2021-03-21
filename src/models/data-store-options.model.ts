import { Observable } from 'rxjs';

export interface DataStoreOptions<T> {
  source: Observable<T[]>;
}
