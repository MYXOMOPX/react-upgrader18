import { FC, useState } from "react";
import { Text } from "../../components/Text";
import { Input } from "../../components/Input";


export const PerformanceExTrouble: FC = () => {

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <Text weight="bold" size="large">Demo of rendering lags:</Text>
            <Input className="u-mt-md" value={inputValue} onChange={setInputValue} placeholder="Type search query..."/>
            <Text className="u-mt-md">Big table below:</Text>
            <div className="table-container u-mt-lg">
                {/* <BigTable query={inputValue}/> */}
            </div>
        </div>
    )
}

