export default {
    lazy: `// file SuspenseUsageLazy.tsx
const LazyComponentOne = React.lazy(() => import('./ComponentOne.tsx'));

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
    , withHook: ``
}