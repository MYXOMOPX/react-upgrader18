import { FC, Suspense, useState } from "react"
import { Button } from "../../components/Button/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import { Text } from "../../components/Text/Text";
import { useSuspenseQuery } from "../../hook";
import { SuspenseQuery } from "../../hook/suspense/util";
import { delayedValue, randomInt } from "../../util";

export const SuspenseUsageHookQuery = () => {
    const [randomNumber, setRandomNumber] = useState(100); 

    const query = useSuspenseQuery(() => delayedValue(randomNumber, 3000), [randomNumber]); 

    const reload = () => {
        setRandomNumber(randomInt(1000));
    }

    return (
        <div className="suspense--usage-datafetch">
            <Text weight="bold" size="large">=== Render-as-You-Fetch ===</Text>
            <Text size="large">Loading data with custom hook - useSuspenseQuery()</Text>
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
    query: SuspenseQuery<number>;
}

const ComponentOne: FC<ComponentOneProps> = ({query}) => {
    const {data: value} = query.read();
    
    return (
        <Text inline weight="bold">Loaded value = {value}</Text>
    )
}