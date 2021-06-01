import { groupBy, map, mergeMap, toArray } from 'rxjs/operators';
import { OperatorFunction } from 'rxjs';
//reusable custom rxjs operator
// Don't touch this function until u know RXJS enough
export function customOp<R>(): OperatorFunction<any, any> {
  return input$ =>
    input$.pipe(
      groupBy((lien: any) => lien.category),
      mergeMap((group: any) => group.pipe(toArray())),
      map(data => {
        return {
          category: data[0].category,
          liens: data
        };
      }),
      toArray()
    );
}
