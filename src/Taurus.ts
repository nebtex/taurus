import { IObservable } from 'mobx';
import { ObservableHashMap } from '@nebtex/hashmaps';
import { Minimatch, filter }from 'minimatch';

export class HashMapOffline<V> extends ObservableHashMap<Array<number>, V> {
  constructor(){
    super();
  }

  protected objectHash(key:any){
    return key.join('/');
  }

  filterByHash(pattern:string) {
    const filteredValues = this.internalMap.keys()
      .filter(filter(pattern))
      .map(key => this.internalMap.get(key));

    return filteredValues;
  }
}

export class Offline<V>{
  hashMap: HashMapOffline<V>;
  constructor(hashMap:HashMapOffline<V>) {
    this.hashMap = hashMap;
  }

  query(pattern:string){
    return this.hashMap.filterByHash(pattern);
  }
}