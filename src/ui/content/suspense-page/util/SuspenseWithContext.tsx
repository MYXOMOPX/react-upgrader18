import React, { FC, PropsWithChildren, Suspense, useContext, useEffect, useMemo, useRef, useState } from "react"
import { Spinner } from "../../../components/Spinner/Spinner";

type SuspendedStatus = "pending" | "resolved" | "rejected";

type SuspendedStore = {
    [key: string]: SuspendedState
}

interface SuspendedState {
    status: SuspendedStatus,
    value?: any,
    promise?: Promise<any>
}

interface SuspenseContextType {
    get: (key: string) => SuspendedState;
    set: (key: string, state: SuspendedState) => void; // changes store
    remove: (key: string) => void;
    cleanStart: () => void;
    cleanEnd: () => void;
} 

const SuspenseContext = React.createContext<SuspenseContextType>(null as any);

const SuspenseCleanerStart: FC = () => {
    useContext(SuspenseContext).cleanStart();
    return null;
}
const SuspenseCleanerEnd: FC = () => {
    useContext(SuspenseContext).cleanEnd();
    return null;
}

export const SuspenseWithContext: FC<PropsWithChildren<{}>> = (props) => {
    const {children} = props;

    const storeRef = useRef<SuspendedStore>({});
    const cleanArrRef = useRef<string[]>([]);
    const ctxValue = useMemo(() => ({
        get: (key: string) => {
            cleanArrRef.current.push(key);
            return storeRef.current[key]
        },
        set: (key: string, state: SuspendedState) => storeRef.current[key] = state,
        remove: (key: string) => delete storeRef.current[key],
        cleanStart: () => cleanArrRef.current = [],
        cleanEnd: () => {
            Object.keys(storeRef.current).filter(it => !cleanArrRef.current.includes(it)).forEach(it => {
                delete storeRef.current[it];
            })
        }
    }), []);
    (window as any)["$store"] = storeRef.current;  

    return (
        <SuspenseContext.Provider value={ctxValue}>
            <Suspense fallback={<Spinner/>}>
                <SuspenseCleanerStart/>
                {children}
                <SuspenseCleanerEnd/>
            </Suspense>
        </SuspenseContext.Provider>
    )
}

interface UseSuspensedResult<T> {
    error?: any;
    data?: T
}

export const useSuspensed = <T extends any>(key: string, method: () => Promise<T>): UseSuspensedResult<T> => {
    const ctx = useContext(SuspenseContext);

    const state = ctx.get(key);

    // useEffect(() => {
    //     return () => ctx.remove(key)
    // }, [key]);

    if (!state) {
        const suspenderPromise = method().then(
            (data) => ctx.set(key, {status: "resolved", value: data}),
            (error) => ctx.set(key, {status: "rejected", value: error}), 
        );
        ctx.set(key, {status: "pending", promise: suspenderPromise});
        throw suspenderPromise;
    } 
    if (state.status === "pending") {
        throw state.promise;
    }
    if (state.status === "rejected") {
        return {error: state.value};
    }
    return {data: state.value}
}

/* 
    <Suspense>
        <CMP1/>
        <CMP2/>
    </Suspense>
*/


// CMP1 useSuspensed(type-1) --- throw promise
// CMP2 useSuspensed(type-2) --- throw promise

// useSuspend-1 resolved
// COUNTER DROPDOWN

// CMP1 useSuspensed(type-1) -- VALUE 1
// CMP1 useSuspensed(type-101)
// CMP2 useSuspensed(type-2)