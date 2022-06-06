import { FC, PropsWithChildren } from "react";
import "./Button.css"

type ButtonProps = PropsWithChildren<{
    onClick?: () => void;
}>

export const Button: FC<ButtonProps> = (props) => {
    const { onClick, children } = props;

    return (
        <button className="btn" onClick={onClick}>
            {children}
        </button>
    )
}