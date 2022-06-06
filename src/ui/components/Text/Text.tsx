import { FC, PropsWithChildren } from "react"
import "./Text.css"

type TextSize = 
    | "small"
    | "medium"
    | "large"
;

type TextProps = PropsWithChildren<{
    inline?: boolean;
    size?: TextSize;
}>

export const Text: FC<TextProps> = (props) => {
    const {inline = false, size = "medium", children} = props;

    if (inline) {
        return <span className={`text _inline _${size}`}>{children}</span>
    } else {
        return <p className={`text _paragraph _${size}`}>{children}</p>
    }
}