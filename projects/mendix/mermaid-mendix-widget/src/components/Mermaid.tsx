import { FunctionComponent, createElement, useEffect, useRef } from "react";
import mermaid from "mermaid";

import { MermaidComponentProps } from "../interfaces";
import { DEFAULT_CONFIG, transformStringToJsonConfig } from "./MermaidSetup";
import ExportButtons from "./ExportButtons";
// import graph from 'mermaid/src/diagrams/flowchart/flowDb'

const Mermaid: FunctionComponent<MermaidComponentProps> = ({
    style,
    theme,
    className,
    markdownBody,
    mermaidSettings,
    showGenerateButton,
    generateInputStyles,
    directDownload,
    generateButtonStyles
}) => {
    const inputEl = useRef<any>(null); // TODO 🐛 if HTMLDivElement
    useEffect(() => {
        mermaid.initialize({
            ...DEFAULT_CONFIG,
            ...transformStringToJsonConfig(mermaidSettings),
            theme
        });
    }, []);

    useEffect(() => {
        /**
         *  If the data-processed tag is left on and the user edits the Graph it wont update
         * Thus we remove the attribute every time the markdownBody Prop (Coming From Mendix)
         * The re-render will add it back
         */
        if (markdownBody) {
            inputEl.current.removeAttribute("data-processed");
            mermaid.contentLoaded();
        }
    }, [markdownBody]);

    if (!markdownBody) return null;

    return (
        <div style={style} className={className}>
            <div ref={inputEl} className="mermaid" dangerouslySetInnerHTML={{ __html: markdownBody as string }} />
            <ExportButtons
                showGenerateButton={showGenerateButton}
                generateInputStyles={generateInputStyles}
                markdownBody={markdownBody}
                directDownload={directDownload}
                generateButtonStyles={generateButtonStyles}
            />
        </div>
    );
};

export default Mermaid;
