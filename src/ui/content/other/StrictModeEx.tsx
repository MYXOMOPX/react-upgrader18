import { FC, useEffect, useRef, useState } from "react";
import { Text } from "../../components/Text";



export const StrictModeEx: FC = () => {

    const xRef = useRef(0);
    const [x, setX] = useState(0);

    useEffect(() => {
        console.log(`AMMA MOUNT WITH X=${x} REF=${xRef.current}`);

        setX(it => it+1);
        xRef.current++;
        
        return () => console.log("AMMA DISMOUNT");
    }, [])

    return (
        <Text size="large">Hello! x={x}</Text>
    )
}