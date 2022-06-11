import { useCallback, useEffect, useMemo, useState } from "react";
import { SuspenseQuery, suspenseOverFunction, ReloadableSuspenseQuery } from "./util";


export const useSuspenseQuery = <T, ARG extends Array<any> = any[]>(method: (...args: ARG) => Promise<T>, deps?: any[]): SuspenseQuery<T,ARG> => {
    
    const query = useMemo(() => {
        return suspenseOverFunction(method)
    }, deps)

    return query;
};


type StateUpdater<T = any> = (val: T) => void;

export const useReloadableSuspenseQuery = <T, ARG extends Array<any> = any[]>(method: (...args: ARG) => Promise<T>, deps?: any[]): ReloadableSuspenseQuery<T,ARG> => {

    const createQuery = useCallback((updateState: StateUpdater<SuspenseQuery<T,ARG>>): SuspenseQuery<T,ARG> => {
        return suspenseOverFunction(method, () => {
            updateState(createQuery(updateState))
        });
    }, [method])

    const [query, setQuery] = useState(() => {
        return createQuery((v) => setQuery(v))
    });

    useEffect(() => {
        setQuery(createQuery(setQuery));
    }, deps)

    return query as ReloadableSuspenseQuery<T,ARG>;
};

export default useSuspenseQuery;