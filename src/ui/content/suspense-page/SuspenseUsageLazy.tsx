import React, { FC, Suspense } from "react"
import { Spinner } from "../../components/Spinner/Spinner";
import { Text } from "../../components/Text/Text";
import { delayedValue } from "../../util";

const LazyComponentOne = React.lazy(() => delayedValue({default: ComponentOne}, 5000));

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


const ComponentOne: FC = () => {
    return (
        <Text size="large">I'm loaded after 5s</Text>
    )
}