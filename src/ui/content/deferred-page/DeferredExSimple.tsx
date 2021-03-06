import { FC, useDeferredValue, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Input } from "../../components/Input";
import { Text } from "../../components/Text";
import { UserListViewDeffered } from "./components/UserListView";


export const DeferredExSimple: FC = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState("");
    
    useEffect(() => {
        console.log("EE #REF", ref.current?.parentElement);
    }, [])
    useLayoutEffect(() => {
        debugger;
        console.log("LE #REF", ref.current?.parentElement);
    }, [])

    return (
        <div ref={ref}>
            <Text weight="bold" size="large">Demo of useDeferredValue:</Text>
            <Input className="u-mt-md" value={inputValue} onChange={setInputValue} placeholder="Search user by name..."/>
            <div className="u-mt-lg">
                <UserListViewDeffered query={inputValue}/>
            </div>
        </div>
    )
}