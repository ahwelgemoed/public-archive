import { CSSProperties } from "react";

export type Theme = "default" | "forest" | "dark" | "neutral";

export enum logLevelEnum {
    Debug = 1,
    Info,
    Warn,
    Error,
    Fatal
}
export interface MermaidComponentProps {
    theme?: Theme;
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
export interface MermaidDefaultConfig {
    theme: Theme;
    logLevel: logLevelEnum;
    securityLevel: string;
    startOnLoad?: boolean;
    arrowMarkerAbsolute?: boolean;
    flowchart?: FlowChartConfig;
    sequence?: SequenceDiagramConfig;
    gantt?: GanttConfig;
    er?: any;
    class?: any;
    git?: any;
}
type FlowChartConfig = {
    htmlLabels?: boolean;
    curve?: string;
};
type SequenceDiagramConfig = {
    diagramMarginX?: number;
    diagramMarginY?: number;
    actorMargin?: number;
    width?: number;
    height?: number;
    boxMargin?: number;
    boxTextMargin?: number;
    noteMargin?: number;
    messageMargin?: number;
    mirrorActors?: boolean;
    bottomMarginAdj?: number;
    useMaxWidth?: boolean;
};

type GanttConfig = {
    titleTopMargin?: number;
    barHeight?: number;
    barGap?: number;
    topPadding?: number;
    leftPadding?: number;
    gridLineStartPadding?: number;
    fontSize?: number;
    fontFamily?: string;
    numberSectionStyles?: number;
    axisFormat?: string;
};
