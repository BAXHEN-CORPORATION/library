import { generate } from "@pdfme/generator";
/**
 * Hook to export to pdf templates
 *
 * Playground to make your templates:
 * {@link https://pdfme.com/template-design playground}
 *
 * Documentation:
 * {@link https://pdfme.com/docs/getting-started docs}
 */
export var useExportToPdf = function () {
    var onExport = function (inputs, template) {
        generate({ inputs: inputs, template: template }).then(function (pdf) {
            var blob = new Blob([pdf.buffer], { type: "application/pdf" });
            window.open(URL.createObjectURL(blob));
        });
    };
    return { onExport: onExport };
};
