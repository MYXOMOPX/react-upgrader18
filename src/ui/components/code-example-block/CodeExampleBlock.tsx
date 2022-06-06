import {FC, ReactNode} from "react";
import "./CodeExampleBlock.css"

interface CodeExampleBlockProps {
    children?: ReactNode;
}

export const CodeExampleBlock: FC<CodeExampleBlockProps> = (props) => {
    const {children} = props;

    return (
        <div className="code-example-block">{children}</div>
    )
}