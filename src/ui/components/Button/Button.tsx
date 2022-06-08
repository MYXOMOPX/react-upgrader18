import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import "./Button.css"

type ButtonProps = PropsWithChildren<{
    onClick?: () => void;
    className?: string;
}>

export const Button: FC<ButtonProps> = (props) => {
    const { onClick, children, className } = props;

    return (
        <button className={cn("btn",className)} onClick={onClick}>
            {children}
        </button>
    )
}