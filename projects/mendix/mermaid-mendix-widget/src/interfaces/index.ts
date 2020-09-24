// export interface MermaidDefaults {}
import { CSSProperties } from "react";
export type ThemeEnum = "default" | "forest" | "dark" | "neutral";

export interface MermaidComponentProps {
    theme?: ThemeEnum;
    className?: string;
    style?: CSSProperties;
    directDownload: boolean;
    generateInputStyles: string;
    showGenerateButton: boolean;
    generateButtonStyles: string;
    markdownBody: string | undefined;
    mermaidSettings: string | undefined;
}
export interface ExportComponentProps {
    directDownload: boolean;
    generateInputStyles: string;
    showGenerateButton: boolean;
    generateButtonStyles: string;
    markdownBody: string | undefined;
}
