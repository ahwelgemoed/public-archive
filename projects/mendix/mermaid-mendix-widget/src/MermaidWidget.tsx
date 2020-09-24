import { Component, ReactNode, createElement } from "react";
import Mermaid from "./components/Mermaid";

import { MermaidWidgetContainerProps } from "../typings/MermaidWidgetProps";

import "./ui/MermaidWidget.css";

export default class MermaidWidget extends Component<MermaidWidgetContainerProps> {
    render(): ReactNode {
        return (
            <Mermaid
                theme={this.props.theme}
                style={this.props.style}
                className={this.props.class}
                directDownload={this.props.directDownload}
                mermaidSettings={this.props.mermaidSettings}
                markdownBody={this.props.textAttribute?.value}
                showGenerateButton={this.props.showGenerateButton}
                generateInputStyles={this.props.generateInputStyles}
                generateButtonStyles={this.props.generateButtonStyles}
            />
        );
    }
}
