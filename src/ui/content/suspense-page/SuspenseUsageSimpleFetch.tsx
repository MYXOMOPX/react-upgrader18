import { FC, Suspense } from "react"
import { Spinner } from "../../components/Spinner/Spinner";
import { Text } from "../../components/Text/Text";
import { delayedValue, randomInt, suspeseOverPromise } from "../../util";


export const SuspenseUsageDataFetch = () => {
    return (
        <div className="suspense--usage-datafetch">
            <Text weight="bold" size="large">=== Render-as-You-Fetch ===</Text>
            <Text size="large">We will load some data inside &lt;Suspense/&gt;</Text>
            <div className="u-mt-md">
                <Suspense fallback={<Spinner/>}>
                    <ComponentOne/>
                </Suspense>
            </div>
        </div>
    )
}


const query = suspeseOverPromise( delayedValue(randomInt(100)) );

const ComponentOne: FC = () => {
    const {data: value} = query.read();
    
    return (
        <Text inline weight="bold">Loaded value = {value}</Text>
    )
}