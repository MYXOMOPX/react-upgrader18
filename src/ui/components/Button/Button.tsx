import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import "./Button.css"

type ButtonElementProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<ButtonElementProps> = (props) => {
    const { children, className, ...restProps } = props;

    return (
        <button {...restProps} className={cn("btn",className)}>
            {children}
        </button>
    )
}