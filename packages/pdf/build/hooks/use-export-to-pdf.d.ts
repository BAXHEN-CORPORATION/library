import { Template } from "@pdfme/generator";
/**
 * Hook to export to pdf templates
 *
 * Playground to make your templates:
 * {@link https://pdfme.com/template-design playground}
 *
 * Documentation:
 * {@link https://pdfme.com/docs/getting-started docs}
 */
export declare const useExportToPdf: <T extends Record<string, string>>() => {
    onExport: (inputs: T[], template: Template) => void;
};
//# sourceMappingURL=use-export-to-pdf.d.ts.map