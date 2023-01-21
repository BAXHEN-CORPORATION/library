import { generate, Template } from "@pdfme/generator";

/**
 * Hook to export to pdf templates
 *
 * Playground to make your templates:
 * {@link https://pdfme.com/template-design playground}
 *
 * Documentation:
 * {@link https://pdfme.com/docs/getting-started docs}
 */

export const useExportToPdf = <T extends Record<string, string>>() => {
  const onExport = (inputs: T[], template: Template) => {
    generate({ inputs, template }).then((pdf) => {
      const blob = new Blob([pdf.buffer], { type: "application/pdf" });
      window.open(URL.createObjectURL(blob));
    });
  };
  return { onExport };
};
