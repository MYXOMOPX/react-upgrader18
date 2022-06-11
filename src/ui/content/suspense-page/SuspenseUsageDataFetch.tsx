import { FC, Suspense, useEffect, useMemo, useState } from "react"
import { Button } from "../../components/Button/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import { Text } from "../../components/Text/Text";
import useSuspenseQuery from "../../hook/suspense/useSuspenseQuery";
import { SuspenseQuery } from "../../hook/suspense/util";
import { delayedValue } from "./util"

export const SuspenseUsageDataFetch = () => {
    const [randomNumber, setRandomNumber] = useState(100); 

    const query = useSuspenseQuery(() => delayedValue(randomNumber, 3000), [randomNumber]);

    const reload = () => {
        setRandomNumber(Math.floor(Math.random()*10000));
    }

    return (
        <div className="suspense--usage-datafetch">
            <Text weight="bold" size="large">Render-as-You-Fetch</Text>
            <Text size="large">We will load some data inside &lt;Suspense/&gt;</Text>
            <Button onClick={reload} className="u-mt-md">Reload in parent</Button>
            <div className="u-mt-md">
                <Suspense fallback={<Spinner/>}>
                    <ComponentOne query={query}/>
                </Suspense>
            </div>
        
        </div>
    )
}

interface ComponentOneProps {
    query: SuspenseQuery;
}

const ComponentOne: FC<ComponentOneProps> = ({query}) => {
    const {data: value} = query.read();
    
    return (
        <div>
            <Text inline weight="bold">Loaded value = {JSON.stringify(value)}</Text>
        </div>
    )
}