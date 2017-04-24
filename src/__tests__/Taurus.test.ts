import { Offline, ResourceMap } from '../Taurus';
import { ObservableHashMap } from '@nebtex/hashmaps';
import test from 'ava';
import {autorun} from 'mobx';

let hashMap: ResourceMap<any>;

test.beforeEach(t => {
  hashMap = new ResourceMap<any>();
});

test('mock test', t => {
  hashMap.set([1, 2, 634], 1);
  hashMap.set([1, 2, 6, 67], 2);
  hashMap.set([12, 23, 64], 100);
  hashMap.set([1, 2, 6], 3);

  let offline = new Offline();
  offline.register('io.omniql.v1', hashMap);
  const { result, disposer } = offline.query('io.omniql.v1', '1/2/*', function (queryset) {
    return queryset.reduce((x: number, y: number) => x + y);
  });

  var disposer2 = autorun(() => console.log(result.value))

  hashMap.set([1,2,7], 9);
  hashMap.set([1,2,8], 27);
  disposer2()
  hashMap.set([1,2,7], 9);
});