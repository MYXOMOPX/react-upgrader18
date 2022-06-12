export const delayedValue = <V>(value: V, timeout: number = 5000): Promise<V> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(value), timeout);
    })
}

type DelayedMethodFn<R = any> = () => R;

export const delayedMethod = <R>(method: DelayedMethodFn<R>, timeout: number = 5000): Promise<R> => {
    return new Promise(resolve => {
        setTimeout(() => resolve(method()), timeout);
    })
}

export const delayedGetter = <R>(value: R, timeout: number = 5000): () => Promise<R> => {
    return () =>  new Promise(resolve => {
        setTimeout(() => resolve(value), timeout);
    })
}