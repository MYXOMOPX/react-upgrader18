import {FC, ReactNode} from "react";
import "./HalfGrid.css"

interface HalfGridProps {
    children?: ReactNode;
}

export const HalfGrid: FC<HalfGridProps> = (props) => {
    const {children} = props;

    return (
        <div className="half-grid">{children}</div>
    )
}