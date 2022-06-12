import { FC, memo, useEffect, useRef, useState } from "react";
import { filledArray, randomInt } from "../../util";

const COLUMN_COUNT = 100;
const ROW_COUNT = 100;

interface BigTableProps {
    query?: string;
}

const BigTableComponent: FC<BigTableProps> = (props) => {
    const { query } = props;
    const countRef = useRef(0);

    countRef.current += 1;

    return (
        <div>
            Rerender count: {countRef.current}
            <table className="big-table">
                <thead>
                    <tr>
                    {filledArray(COLUMN_COUNT, (i) => (<th key={i}>COL {i}</th>)) }
                    </tr>
                </thead>
                <tbody>
                    {filledArray(ROW_COUNT, (r) => (
                        <tr key={r}>
                            {filledArray(COLUMN_COUNT, (c) => (<td key={c}>CELL {r}-{c} {query}</td>)) }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export const BigTable = memo(BigTableComponent);