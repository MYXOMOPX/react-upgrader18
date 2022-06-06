import { FC, PropsWithChildren } from "react"
import "./ExampleBlock.css"

export const ExampleBlock: FC<PropsWithChildren<{}>> = (props) => {
    const {children} = props;

    return (
        <div className="example-block">
            {children}
        </div>
    )
} 