import { ChangeEvent, CSSProperties, FC, useCallback, useMemo } from "react";
import "./Input.css"

type InputElementProps = Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 
    "value" | "onChange"
>

interface InputProps extends InputElementProps {
    value: string | undefined;
    onChange?: (val: string) => void;
}

export const Input: FC<InputProps> = (props) => {
    const {
        value, onChange, className = "", ...restProps
    } = props;

    const inputClass = "input "+className

    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.currentTarget.value);
    }, [onChange])
    
    return (
        <input  
            {...restProps}
            className={inputClass}
            value={value}
            onChange={onInputChange}
        />
    )
}