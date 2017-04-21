import { IObservable } from 'mobx';
import { HashMap } from '@nebtex/hashmaps';
import { Minimatch }from 'minimatch';

export class Offline<K, V>{
  hashMap: HashMap<K, V>;
  constructor(hashMap:HashMap<K, V>) {
    this.hashMap = hashMap;
  }

  // query(app:string, pattern:string): IObservable{
  //   const minimatch = new Minimatch(pattern);
  //   const regexp = minimatch.regexp;

  //   return 
  // }
}