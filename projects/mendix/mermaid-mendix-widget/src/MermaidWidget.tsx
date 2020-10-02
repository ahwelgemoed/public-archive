import { Component, ReactNode, createElement } from "react";
import Mermaid from "./components/Mermaid";

import { MermaidWidgetContainerProps } from "../typings/MermaidWidgetProps";

export default class MermaidWidget extends Component<MermaidWidgetContainerProps> {
    render(): ReactNode {
        const {
            theme,
            style,
            directDownload,
            mermaidSettings,
            showGenerateButton,
            generateInputStyles,
            generateButtonStyles,
            textAttribute
        } = this.props;

        return (
            <Mermaid
                theme={theme}
                style={style}
                className={this.props.class}
                directDownload={directDownload}
                mermaidSettings={mermaidSettings}
                markdownBody={textAttribute?.value}
                showGenerateButton={showGenerateButton}
                generateInputStyles={generateInputStyles}
                generateButtonStyles={generateButtonStyles}
            />
        );
    }
}
