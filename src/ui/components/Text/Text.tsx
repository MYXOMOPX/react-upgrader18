import { FC, PropsWithChildren } from "react"
import "./Text.css"

type Textcolor = 
    | "white"
    | "grey"
    | "primary"
;

type TextSize = 
    | "small"
    | "medium"
    | "large"
    | "xlarge"
;

type TextWeight =
    | "regular"
    | "semibold"
    | "bold"
;

type TextProps = PropsWithChildren<{
    inline?: boolean;
    size?: TextSize;
    weight?: TextWeight;
    color?: Textcolor;
    className?: string;
}>

export const Text: FC<TextProps> = (props) => {
    const {inline = false, size = "medium", weight = "regular", color = "grey", children, className} = props;

    const classes = `text _${size} _b-${weight} _c-${color} ${className}`

    if (inline) {
        return <span className={`${classes} _inline`}>{children}</span>
    } else {
        return <p className={`${classes} _paragraph`}>{children}</p>
    }
}