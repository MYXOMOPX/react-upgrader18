import { FC, useDeferredValue, useMemo, useState, useTransition } from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { UserListView } from "./components/UserListView";


export const DeferredExTransition: FC = () => {

    const [inputValue, setInputValue] = useState("");
    const [queryValue, setQueryValue] = useState("");
    const [isPending, startTransition] = useTransition();

    const onInputChange = (val: string) => {
        setInputValue(val);
        startTransition(() => {
            setQueryValue(val);
        })
    }

    return (
        <div>
            <Text weight="bold" size="large">Compare with transitions:</Text>
            <Input className="u-mt-md" value={inputValue} onChange={onInputChange} placeholder="Search user by name..."/>
            <div className="u-mt-lg">
                <Text>{inputValue}</Text>
                <UserListView query={queryValue} displayQuery={inputValue}/>
            </div>
        </div>
    )
}