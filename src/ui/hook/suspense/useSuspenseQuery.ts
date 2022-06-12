import { useCallback, useEffect, useMemo, useState } from "react";
import { SuspenseQuery, suspenseOverFunction, ReloadableSuspenseQuery } from "./util";


export const useSuspenseQuery = <T>(method: () => Promise<T>, deps?: any[]): SuspenseQuery<T> => {
    const query = useMemo(() => {
        return suspenseOverFunction(method)
    }, deps)

    return query;
};


type StateUpdater<T = any> = (val: T) => void;

export const useReloadableSuspenseQuery = <T>(method: () => Promise<T>, deps?: any[]): ReloadableSuspenseQuery<T> => {

    const createQuery = useCallback((updateState: StateUpdater<SuspenseQuery<T>>): SuspenseQuery<T> => {
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

    return query as ReloadableSuspenseQuery<T>;
};

export default useSuspenseQuery;