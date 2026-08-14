import { Component, ReactNode, createElement } from "react";
import { MermaidWidgetPreviewProps } from "../typings/MermaidWidgetProps";

declare function require(name: string): string;

export class preview extends Component<MermaidWidgetPreviewProps> {
    render(): ReactNode {
        return <div />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/MermaidWidget.css");
}
