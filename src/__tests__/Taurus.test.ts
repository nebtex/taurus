import { Offline, ResourceMap } from '../Taurus';
import { ObservableHashMap } from '@nebtex/hashmaps';
import test from 'ava';


let hashMap: ResourceMap<any>;

test.beforeEach(t => {
  hashMap = new ResourceMap<any>();
});

test('mock test', t => {
  hashMap.set([1,2,634], 'object1');
  hashMap.set([1,2,6,67], 'object2');
  hashMap.set([12,23,64], 'object3');
  hashMap.set([1,2,6], 'object4');

  let offline = new Offline();
  offline.register('io.omniql.v1', hashMap);
  offline.query('io.omniql.v1', '1/2/*', function(queryset){
    t.is(queryset.length, 2);
  });
});