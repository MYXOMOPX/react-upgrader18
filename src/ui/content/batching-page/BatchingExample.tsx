import { useEffect, useReducer, useState } from "react";
import { Button } from "../../components/Button/Button";
import { Text } from "../../components/Text/Text";

export const BatchingExampleNew = () => {
    const [c1, c1Set] = useState(0);
    const [c2, c2Set] = useState(0);
    const [rerenders, rerendersSet] = useState(0);

    useEffect(() => {
        if (c1 == 0) return;
        rerendersSet(r => r+1);
    }, [c1, c2]);
    
    const increment = () => {
        setTimeout(() => { // It may be fetch
            c1Set(c => c+1);
            c2Set(c => c-1);
        }, 500);
    }

    return (
        <div>
            <Text>
                <Text inline weight="semibold">Counter-1 (+1): </Text><Text inline>{c1}</Text>
            </Text>
            <Text className="u-mt-sm">
                <Text inline weight="semibold">Counter-2 (-1) </Text><Text inline>{c2}</Text>
            </Text>
            <Text className="u-mt-sm">
                <Text inline weight="bold">Rerender count: </Text> <Text inline>{rerenders}</Text>
            </Text>
            <Button className="u-mt-md" onClick={increment}>Increment</Button>
        </div>
    )
}