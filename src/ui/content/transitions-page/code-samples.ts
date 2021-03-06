export default {
trouble: `// TransitionExTrouble.tsx
export const TransitionExTrouble: FC = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <Text>Demo of rendering lags:</Text>
            <Input value={inputValue} onChange={setInputValue}/>
            <Text>Big table below:</Text>
            
            <BigTable query={inputValue}/>
        </div>
    )
}`

, withTransitions: ` // TransitionExSolution.tsx
export const TransitionExSolution: FC = () => {

    // for urgent updates -- input 
    const [inputValue, setInputValue] = useState("");

    // for non-urgent updates -- table
    const [queryValue, setQueryValue] = useState("");

    const [isPending, startTransition] = useTransition();

    const onInputChange = (value: string) => {
        setInputValue(value); // triggers urgent update
        startTransition(() => {
            // triggers NON-urgent update (can be interrupted)
            setQueryValue(value);
        })
    }

    return (
        <div>
            <Text>Demo with using of transitions:</Text>
            <Text>{isPending ? "Yes" : "No"}</Text>
            <Input value={inputValue} onChange={onInputChange}/>
            <Text>Big table below:</Text>
            
            <BigTable query={queryValue}/>
        </div>
    )
}`
}