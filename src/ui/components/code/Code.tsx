import React, {CSSProperties, FC, useMemo} from "react";
import { CodeBlock, dracula as theme } from "react-code-blocks";
import "./Code.css"

interface CodeProps {
    text?: string;
    language: "tsx" | "typescript",
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