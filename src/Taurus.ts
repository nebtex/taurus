import { IObservable } from 'mobx';
import { ObservableHashMap } from '@nebtex/hashmaps';
import { Minimatch, filter }from 'minimatch';

export class HashMapOffline<K, V> extends ObservableHashMap<K, V> {
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

export class Offline<K, V>{
  hashMap: HashMapOffline<K, V>;
  constructor(hashMap:HashMapOffline<K, V>) {
    this.hashMap = hashMap;
  }

  query(pattern:string){
    return this.hashMap.filterByHash(pattern);
  }
}