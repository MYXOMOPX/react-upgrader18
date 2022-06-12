export interface SuspenseOverPromiseData<T> {
    data?: T,
    error?: any
}

export type SuspenseQuery<DATA = any> = {
    read: () => SuspenseOverPromiseData<DATA>;
}
export type ReloadableSuspenseQuery<DATA = any> = SuspenseQuery<DATA> & {
    reload: () => void;
}

export const suspenseOverFunction = <DATA>(
    method: () => Promise<DATA>,
    onReload?: () => void
): SuspenseQuery<DATA> | ReloadableSuspenseQuery<DATA> => {
    let promise: Promise<any> | null = null;
    let state: SuspenseOverPromiseData<DATA> | null = null;
    
    const reload = onReload && (() => {
        promise = null;
        onReload();
    })

    return {
        read: () => {
            if (state === null) {
                if (promise === null) {
                    promise = method().then(
                        (data) => state = { data },
                        (error) => state = { error }
                    );
                }
                throw promise;
            }
            return state;
        },
        reload
    }
}