import { Offline, HashMapOffline } from '../Taurus';
import { ObservableHashMap } from '@nebtex/hashmaps';
import test from 'ava';


let hashMap: HashMapOffline<Array<number>, any>;

test.beforeEach(t => {
  hashMap = new HashMapOffline<Array<number>, {}>();
});

test('mock test', t => {
  hashMap.set([1,2,634], 'object1');
  hashMap.set([1,2,6,67], 'object2');
  hashMap.set([12,23,64], 'object3');
  hashMap.set([1,2,6], 'object4');

  let offline = new Offline(hashMap);
  let queryset = offline.query('1/2/*');
  t.deepEqual(queryset, ['object1', 'object4'])
});