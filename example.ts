import { Kind, URIS } from "fp-ts/lib/HKT";
import * as O from "fp-ts/lib/Option";

type Unlift1<F extends URIS, H> = H extends Kind<F, infer A> ? A : never;
type Unlift0<F extends URIS> = O.Option<number> extends Kind<F, infer A> ? A : never;

type T = Unlift1<O.URI, O.Option<number>>;
type S = Unlift0<O.URI>;

declare const t: T;
declare const s: S;

// Expected: T = number
// Actual: T = unknown
// Error: TS2322: Type 'unknown' is not assignable to type 'number'.
const tAsS: S = t;
const sAsT: T = s;
