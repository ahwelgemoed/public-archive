import { MermaidDefaultConfig } from "../interfaces/index";

export const DEFAULT_CONFIG: MermaidDefaultConfig = {
    theme: "default",
    logLevel: 1,
    securityLevel: "strict",
    startOnLoad: true,
    arrowMarkerAbsolute: false,
    er: {
        diagramPadding: 20,
        layoutDirection: "TB",
        minEntityWidth: 100,
        minEntityHeight: 75,
        entityPadding: 15,
        stroke: "gray",
        fill: "honeydew",
        fontSize: 9,
        useMaxWidth: true
    },
    flowchart: {
        htmlLabels: true,
        curve: "linear"
    },
    sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35,
        mirrorActors: true,
        bottomMarginAdj: 1,
        useMaxWidth: true
    },
    gantt: {
        titleTopMargin: 25,
        barHeight: 20,
        barGap: 4,
        topPadding: 50,
        leftPadding: 75,
        gridLineStartPadding: 35,
        fontSize: 9,
        numberSectionStyles: 4,
        axisFormat: "%d-%m-%y"
    }
};

export const transformStringToJsonConfig = (mermaidSettings: string | undefined) => {
    if (mermaidSettings) {
        try {
            return JSON.parse(mermaidSettings);
        } catch (error) {
            console.error(`Invalid Mermaid Config, ${error.message}`);
        }
    }
};
