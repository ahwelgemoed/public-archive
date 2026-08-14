import { Fragment, FunctionComponent, createElement, useState } from "react";
import { ExportComponentProps } from "../interfaces";
import classNames from "classNames";
import mermaid from "mermaid";

const ExportButtons: FunctionComponent<ExportComponentProps> = ({
    showGenerateButton,
    generateInputStyles,
    markdownBody,
    directDownload,
    generateButtonStyles
}) => {
    const [inputBase64, setInputBase64] = useState<string>("");

    const generateSVG = (): void => {
        let svgGraph;
        mermaid.render("svgID", markdownBody as string, tempSvgGraph => (svgGraph = tempSvgGraph));
        if (svgGraph) {
            const createdBase64Svg = `data:image/svg+xml;base64, ${window.btoa(svgGraph)}`;
            if (directDownload) {
                prompUserToDownloadImg(createdBase64Svg);
            }
            setInputBase64(createdBase64Svg);
        }
    };

    const prompUserToDownloadImg = (createdBase64Svg: string): void => {
        /**
         * This is to fool Browsers that User Clicked The Download button
         * Modern Browsers Prevent Indirect Downloads from Button Clicks
         */
        const link = document.createElement("a");
        link.href = createdBase64Svg;
        link.download = "Mendix-Created-Graph.svg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const classNamesForButton = classNames("btn", generateButtonStyles);
    const classNamesForInput = classNames("form-control", generateInputStyles);
    return (
        <Fragment>
            {showGenerateButton && (
                <Fragment>
                    <button className={classNamesForButton} onClick={() => generateSVG()}>
                        Generate SVG
                    </button>
                    {!directDownload && (
                        <Fragment>
                            <button
                                disabled={!inputBase64}
                                className={classNamesForButton}
                                onClick={() => prompUserToDownloadImg(inputBase64)}
                            >
                                Download SVG
                            </button>
                            <input
                                placeholder="Base 64 String"
                                name="Base64Input"
                                value={inputBase64}
                                className={classNamesForInput}
                            />
                        </Fragment>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
};

export default ExportButtons;
