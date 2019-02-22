import { of } from 'rxjs'
import { map, filer } from 'rxjs/operators';

of(1).pipe(
  map(v => v),
  filer(v => false),
)


// of(1)
//   |> map(v => v)
//   |> filer()