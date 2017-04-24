import { ObservableMap, observable } from 'mobx';
import { ObservableHashMap } from '@nebtex/hashmaps';
import { Minimatch, filter } from 'minimatch';

export class Result {
  @observable value: any
}

export class ResourceMap<V> extends ObservableHashMap<Array<number>, V> {
  constructor() {
    super();
  }

  protected objectHash(key: any) {
    return key.join('/');
  }

  filterByHash(pattern: string) {
    const filteredValues = this.internalMap.keys()
      .filter(filter(pattern))
      .map(key => this.internalMap.get(key));

    return filteredValues;
  }
}

export class Offline<V>{
  applications: Map<string, ResourceMap<V>> = new Map();

  register(app: string, hashMap: ResourceMap<V>) {
    this.applications.set(app, hashMap);
  }

  query(app: string, pattern: string, handler: (queryset: Array<V>) => void): any {
    const hashMap = this.applications.get(app);
    if (!hashMap)
      return void 0

    let result = new Result()
    let disposer = hashMap.observe(function () {
      result.value = handler(hashMap.filterByHash(pattern))
    })
    result.value = handler(hashMap.filterByHash(pattern));
    return { result, disposer }
  }
}