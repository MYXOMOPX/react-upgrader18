import { FC } from "react"
import "./Spinner.css"

interface SpinnerProps {
    size?: number
}

export const Spinner: FC<SpinnerProps> = (props) => {
    const {size = 5} = props;
    
    return (
        <div className="spinner" style={{width: `${size}rem`, height: `${size}rem`}}></div>
    )
}