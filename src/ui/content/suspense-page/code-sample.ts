export default {
    lazy: `// file SuspenseUsageLazy.tsx
const LazyComponentOne = React.lazy(() => { 
    return import('./ComponentOne.tsx')
});

export const SuspenseUsageLazy = () => {
    return (
        <div className="suspense-usage-lazy">
            <Text size="large">I'm always visible!</Text>
            <Suspense fallback={<Spinner/>}>
                <LazyComponentOne/>
            </Suspense>
        </div>
    )
}
    
// file ComponentOne.tsx
const ComponentOne: FC = () => {
    return (
        <Text size="large">I'm loaded after 5s</Text>
    )
}`
, dataFetch: `// SuspenseUsageDataFetch.tsx
export const SuspenseUsageDataFetch = () => {
    return (
        <div className="suspense-ctr">
            <Text>=== Render-as-You-Fetch ===</Text>
            <div className="u-mt-md">
                <Suspense fallback={<Spinner/>}>
                    <ComponentOne/>
                </Suspense>
            </div>
        </div>
    )
}

// ComponentOne.tsx
const query = suspeseOverPromise( delayedValue(randomInt(100)) );

const ComponentOne: FC = () => {
    const {data: value} = query.read();
    
    return (
        <Text inline weight="bold">
            Loaded value = {value}
        </Text>
    )
}`
, suspenseOverPromise: `// suspenseOverPromise.ts
export const  suspeseOverPromise = <T>(promise: Promise<T>) => {
    let status = 'pending';
    let data: T;
    let error: any;
    let suspendPromise: Promise = promise.then(
        (r) => {
          status = 'success';
          data = r;
        },
        (e) => {
          status = 'error';
          error = e;
        }
    );
    return {
        read() { // throws promise or returns {data?: T,  error?: any}
            if (status === 'pending') {
                throw suspendPromise;
                 // component will try to render again, when this promise resolve
            } else if (status === 'error') {
                return {error};
            } else {
                return {data};
            }
        }
    }
}
`



, withHookQuery: `// SuspenseUsageHookQuery.tsx
export const SuspenseUsageHookQuery = () => {
    const [randomNumber, setRandomNumber] = useState(100); 
    const query = useSuspenseQuery(
        () => delayedValue(randomNumber, 3000), [randomNumber]
    );
    const reload = () => setRandomNumber(randomInt(1000));

    return (
        <div className="suspense-ctr">
            {/* Some text here */}
            <Button onClick={reload} >Reload</Button>
            <div>
                <Suspense fallback={<Spinner/>}>
                    <ComponentOne query={query}/>
                </Suspense>
            </div>
        </div>
    )
}

// ComponentOne.tsx
interface ComponentOneProps {
    query: SuspenseQuery<number>;
}

const ComponentOne: FC<ComponentOneProps> = ({query}) => {
    const {data: value} = query.read();
    return (
        <Text inline weight="bold">
            Loaded value = {value}
        </Text>
    );
}`
, useSuspenseQuery: `// useSuspenseQuery.ts
export const useSuspenseQuery = <T>(
    method: () => Promise<T>, 
    deps?: any[]
): SuspenseQuery<T> => {
    const query = useMemo(() => {
        return suspenseOverFunction(method)
    }, deps)

    return query;
};`
, suspenseOverFunction: `// suspenseOverFunction.ts
export const suspenseOverFunction = <DATA>(
    method: () => Promise<DATA>
): SuspenseQuery<DATA> | ReloadableSuspenseQuery<DATA> => {
    let promise: Promise<any> | null = null;
    let state: SuspenseOverPromiseData<DATA> | null = null;

    return {
        read: () => {
            if (state === null) {
                if (promise === null) {
                    promise = method().then( data => state = { data },  error => state = { error } );
                }
                throw promise;
            }
            return state;
        }
    }
}`
}