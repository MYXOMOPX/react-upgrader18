import { FC, useDeferredValue, useMemo, useState } from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { UserView } from "./UserView";


export const DeferredExSimple: FC = () => {

    const [inputValue, setInputValue] = useState("");
    const deferredValue = useDeferredValue(inputValue);

    const userCard = useMemo(() => (
        <UserView query={deferredValue}/>
    ), [deferredValue])

    return (
        <div>
            <Text weight="bold" size="large">Demo of rendering lags:</Text>
            <Input className="u-mt-md" value={inputValue} onChange={setInputValue} placeholder="Type search query..."/>
            <Text className="u-mt-md">UserView below:</Text>
            <div className="table-container u-mt-lg">
                {userCard}
            </div>
        </div>
    )
}