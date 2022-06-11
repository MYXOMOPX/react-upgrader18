export default 3
// import { useCallback, useEffect, useMemo, useRef, useState } from "react";
// import { suspenseOverFunction, suspeseOverPromise as suspenseOverPromise } from "./util";

// interface UseSuspenseDataResult<T = any, ARGS extends Array<any> = never> {
// 	data?: T;
// 	error?: any;
//     handler?: (...args: ARGS) => void;
// }

// interface UseSuspenseDataOpts<T = any> {
//     initialData?: T,
//     deps?: any[]
// }

// const NO_REQUEST_STAMP = -1;

// const useSuspenseData = <T,ARGS extends Array<any>>(method: (...arg: ARGS) => Promise<T>, deps?: any[]): UseSuspenseDataResult<T> => {

//     const x = useRef(Math.random());
//     console.log("REFVAL:", x.current);

//     const [observer] = useState(() => {
//         console.log("USE STATE CALL")
//         return suspenseOverPromise(method());
//     })

//     return observer.read()
// };

// export default useSuspenseData;