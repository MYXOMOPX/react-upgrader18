import {CSSProperties, FC, useMemo} from "react";
import { CodeBlock, obsidian as theme } from "react-code-blocks";
import "./Code.css"

interface CodeProps {
    text?: string;
    language: "tsx" | "typescript" | "jsx",
    hideLineNumbers?: boolean
    style?: CSSProperties;
    textSize?: CSSProperties["fontSize"]
    highlight?: string;
    rounded?: boolean;
}

export const Code: FC<CodeProps> = (props) => {
    const {
        text,
        language,
        hideLineNumbers = false,
        style = {},
        textSize = "1.5rem",
        highlight,
        rounded = true,
    } = props;

    const styles = useMemo(() => {
        const styles = {...style, fontSize: textSize};
        if (!rounded) styles.borderRadius = "none";
        return styles;
    }, [])

    return (
        <CodeBlock
            lineNumberContainerStyle={{userSelect: "auto", paddingTop: 0, paddingBottom: 0}}
            customStyle={styles}
            text={text}
            language={language}
            highlight={highlight}
            showLineNumbers={!hideLineNumbers}
            theme={theme}
            wrapLines
        />
    )
} 