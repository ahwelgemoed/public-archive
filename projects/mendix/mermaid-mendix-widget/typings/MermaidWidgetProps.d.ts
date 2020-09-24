/**
 * This file was generated from MermaidWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export type ThemeEnum = "default" | "forest" | "dark" | "neutral";

export interface MermaidWidgetContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex: number;
    textAttribute: EditableValue<string>;
    showGenerateButton: boolean;
    directDownload: boolean;
    generateButtonStyles: string;
    generateInputStyles: string;
    theme: ThemeEnum;
    mermaidSettings: string;
}

export interface MermaidWidgetPreviewProps {
    class: string;
    style: string;
    textAttribute: string;
    showGenerateButton: boolean;
    directDownload: boolean;
    generateButtonStyles: string;
    generateInputStyles: string;
    theme: ThemeEnum;
    mermaidSettings: string;
}
