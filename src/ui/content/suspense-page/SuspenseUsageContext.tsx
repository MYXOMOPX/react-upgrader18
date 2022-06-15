import { FC, memo, Suspense, useState } from "react"
import { Button } from "../../components/Button/Button";
import { Spinner } from "../../components/Spinner/Spinner";
import { Text } from "../../components/Text/Text";
import { useSuspenseQuery } from "../../hook";
import { SuspenseQuery } from "../../hook/suspense/util";
import { delayedGetter, delayedValue, filledArray, randomInt } from "../../util";
import { SuspenseWithContext, useSuspensed } from "./util/SuspenseWithContext";

export const SuspenseUsageContext = () => {
    const [randomNumber, setRandomNumber] = useState(100); 
    const [count, setCount] = useState(2);

    const query = useSuspenseQuery(() => delayedValue(randomNumber, 3000), [randomNumber]); 

    const reload = () => {
        setRandomNumber(randomInt(1000));
    }

    return (
        <div className="suspense--usage-datafetch">
            <Text weight="bold" size="large">=== Render-as-You-Fetch ===</Text>
            <Text className="u-mt-md" size="large">Loading data with custom hook - useSuspenseQuery()</Text>
            <Text className="u-mt-md">Our fetching-random number is {randomNumber}</Text>
            <Button onClick={reload} className="u-mt-md">Reload in parent</Button>
            <Button onClick={() => setCount(v => v+1)} className="u-mt-md">+</Button>
            <Button onClick={() => setCount(v => v-1)} className="u-mt-md">-</Button>
            <div className="u-mt-md">
                <SuspenseWithContext>
                    {filledArray(count, (i) => (
                        <ComponentOneMemo id={"rnd-"+i+"-"+randomNumber}/>
                    ))}
                </SuspenseWithContext>
            </div>
        
        </div>
    )
}

interface ComponentOneProps {
    id: string;
}

const ComponentOne: FC<ComponentOneProps> = ({id}) => {
    console.log("#BEFORE query.read");
    const {data: value} = useSuspensed(id, delayedGetter(randomInt(1000), 5000))
    console.log("#AFTER query.read",value);
    
    return (
        <div>
            <Text inline weight="bold">Loaded value = {value}</Text>
        </div>
    )
}

const ComponentOneMemo = memo(ComponentOne);