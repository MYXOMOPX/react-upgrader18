export interface SuspenseOverPromiseData<T> {
    data?: T,
    error?: any
}

export type SuspenseQuery<DATA = any, ARG extends Array<any> = any[]> = {
    read: (...args: ARG) => SuspenseOverPromiseData<DATA>;
}
export type ReloadableSuspenseQuery<DATA = any, ARG extends Array<any> = any[]> = SuspenseQuery<DATA,ARG> & {
    reload: () => void;
}

/**
 * 
 * const query = useSuspenseQuery(() => {}, [deps])
 */

export const suspenseOverFunction = 
<DATA, ARG extends Array<any> = any[]>(
    method: (...args: ARG) => Promise<DATA>,
    onReload?: () => void
): SuspenseQuery<DATA, ARG> | ReloadableSuspenseQuery<DATA, ARG> => {
    let promise: Promise<any>|null = null;
    let status = 'pending';
    let state = {};
    
    const reload = onReload && (() => {
        promise = null;
        onReload();
    })

    return {
        read: (...args: ARG) => {
            if (promise === null) {
                promise = method(...args).then(
                    (data) => {
                      status = 'success';
                      state = { data };
                    },
                    (error) => {
                      status = 'error';
                      state = { error };
                    }
                );
                throw promise;
            }

            if (status === 'error') {
                return state;
            } else {
                return state;
            }
        },
        reload
    }
}