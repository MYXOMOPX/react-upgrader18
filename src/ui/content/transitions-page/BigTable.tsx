import { FC } from "react";
import { filledArray, randomInt } from "../../util";

const COLUMN_COUNT = 100;
const ROW_COUNT = 100;

interface BigTableProps {
    query?: string;
}

export const BigTable: FC<BigTableProps> = (props) => {
    const { query } = props;

    return (
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
    )
}