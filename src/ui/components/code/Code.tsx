import {CSSProperties, FC, useEffect, useInsertionEffect, useLayoutEffect, useMemo, useRef} from "react";
import { CodeBlock, dracula as theme } from "react-code-blocks";
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
        textSize = "2rem",
        highlight,
        rounded = true,
    } = props;

    const codeblockRef = useRef<HTMLDivElement>(null)

    const styles = useMemo(() => {
        const styles = {...style, fontFamily: "Roboto Mono", flex: "1", fontSize: textSize};
        if (!rounded) styles.borderRadius = "none";
        return styles;
    }, [])

    useLayoutEffect(() => {
        if (!codeblockRef.current) return;
        setTimeout(() => {
            const spans = codeblockRef?.current?.querySelectorAll(`code>span:not([class="react-syntax-highlighter-line-number"])`);
            for (var i = 0; i < (spans && spans.length || 0); i++) {
                const el = spans?.[i] as HTMLSpanElement;
                if (el.style.opacity === "0.3") el.style.opacity = "0.5"
            }
        }, 10)

    })

    return (
        <div ref={codeblockRef} style={{overflow: "hidden", height: "100%", width: "100%", display: "flex"}}>
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
        </div>
    )
} 