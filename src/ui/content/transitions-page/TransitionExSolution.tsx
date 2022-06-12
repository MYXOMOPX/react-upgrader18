import { FC, useState, useTransition } from "react";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";
import { BigTable } from "./BigTable";


export const TransitionExSolution: FC = () => {

    const [inputValue, setInputValue] = useState("");
    const [queryValue, setQueryValue] = useState("");

    const [isPending, startTransition] = useTransition();

    const onInputChange = (value: string) => {
        setInputValue(value);
        startTransition(() => {
            setQueryValue(value);
        })
    }

    return (
        <div>
            <Text weight="bold" size="large">Demo with using of transitions:</Text>
            <Text weight="semibold" className="u-mt-md">Transition in process: {isPending ? "Yes" : "No"}</Text>
            <Input className="u-mt-md" value={inputValue} onChange={onInputChange} placeholder="Type search query..."/>
            <Text className="u-mt-md">Big table below:</Text>
            <div className="table-container u-mt-lg">
                <BigTable query={queryValue}/>
            </div>
        </div>
    )
}

