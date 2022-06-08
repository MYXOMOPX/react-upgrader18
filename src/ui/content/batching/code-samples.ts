export default {
    new: `export const BatchingExampleNew = () => {
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
            }, 200);
        }
    
        return (
            <div>
                <Text><Text inline weight="semibold">Counter-1 (+1): </Text><Text inline>{c1}</Text></Text>
                <Text><Text inline weight="semibold">Counter-2 (-1) </Text><Text inline>{c2}</Text></Text>
                <Text>
                    <Text inline weight="bold">Rerender count: </Text> <Text inline>{rerenders}</Text>
                </Text>
                <Button onClick={increment}>Increment</Button>
            </div>
        )
    }`
    , oldState: `export const BatchingExampleOldWay = () => {
        const [state, stateSet] = useState({c1: 0, c2:0})
    
        const [rerenders, rerendersSet] = useState(0);
    
        useEffect(() => {
            if (state.c1 == 0) return;
            rerendersSet(r => r+1);
        }, [state]);
        
        const increment = () => {
            setTimeout(() => { // It may be fetch
                stateSet({c1: state.c1 + 1, c2: state.c1 + 1})
            }, 200);
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
    }`
    , oldReducer: `export const BatchingExampleOldWay = () => {
        const [state, dispatch] = useReducer(/* ... reducer function ... */, {c1: 0, c2:0})
    
        const [rerenders, rerendersSet] = useState(0);
    
        useEffect(() => {
            if (state.c1 == 0) return;
            rerendersSet(r => r+1);
        }, [state]);
        
        const increment = () => {
            setTimeout(() => { // It may be fetch
                dispatch({c1: state.c1 + 1, c2: state.c1 + 1})
            }, 200);
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
    }`
}