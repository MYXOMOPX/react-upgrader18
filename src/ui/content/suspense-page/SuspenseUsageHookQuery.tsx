import { FC, Suspense, useId, useState } from "react"
import { Button } from "../../components/Button/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import { Text } from "../../components/Text/Text";
import { useSuspenseQuery } from "../../hook";
import { SuspenseQuery } from "../../hook/suspense/util";
import { delayedValue, randomInt } from "../../util";

export const SuspenseUsageHookQuery = () => {
    const [randomNumber, setRandomNumber] = useState(100); 

    const query = useSuspenseQuery(() => delayedValue(randomNumber, 3000), [randomNumber]); 
    const query2 = useSuspenseQuery(() => delayedValue(randomNumber+100000, 3000), [randomNumber]); 

    const reload = () => {
        setRandomNumber(randomInt(1000));
    }

    console.log("#RENDER", randomNumber);

    return (
        <div className="suspense--usage-datafetch">
            <Text weight="bold" size="large">=== Render-as-You-Fetch ===</Text>
            <Text className="u-mt-md" size="large">Loading data with custom hook - useSuspenseQuery()</Text>
            <Text className="u-mt-md">Our fetching-random number is {randomNumber}</Text>
            <Button onClick={reload} className="u-mt-md">Reload in parent</Button>
            <div className="u-mt-md">
                <Suspense fallback={<Spinner/>}>
                    <ComponentOne query={query}/>
                    <ComponentOne query={query2}/>
                </Suspense>
            </div>
        
        </div>
    )
}

interface ComponentOneProps {
    query: SuspenseQuery<number>;
}

const ComponentOne: FC<ComponentOneProps> = ({query}) => {
    const id = useId();
    console.log("#BEFORE query.read ||| id=", id);
    const {data: value} = query.read();
    console.log("#AFTER query.read",value);
    
    return (
        <Text inline weight="bold">Loaded value = {value}</Text>
    )
}