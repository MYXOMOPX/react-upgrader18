export default {
trouble: `// TransitionExTrouble.tsx
export const TransitionExTrouble: FC = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <Text>Demo of rendering lags:</Text>
            <Input value={inputValue} onChange={setInputValue}/>
            <Text>Big table below:</Text>
            <div>
                <BigTable query={inputValue}/>
            </div>
        </div>
    )
}`

, withTransitions: ` // TransitionExSolution.tsx
export const TransitionExSolution: FC = () => {

    const [inputValue, setInputValue] = useState(""); // for urgent updates -- input 
    const [queryValue, setQueryValue] = useState(""); // for non-urgent updates -- table

    const [isPending, startTransition] = useTransition();

    const onInputChange = (value: string) => {
        setInputValue(value); // triggers urgent update
        startTransition(() => {
            setQueryValue(value); // triggers NON-urgent update (can be interrupted)
        })
    }

    return (
        <div>
            <Text>Demo with using of transitions:</Text>
            <Text>Transition in process: {isPending ? "Yes" : "No"}</Text>
            <Input value={inputValue} onChange={onInputChange} />
            <Text>Big table below:</Text>
            
            <div>
                <BigTable query={queryValue}/>
            </div>
        </div>
    )
}`
}