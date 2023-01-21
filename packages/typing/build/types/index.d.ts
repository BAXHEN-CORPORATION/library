import type { Palette, PaletteColor, TypographyProps } from "@mui/material";
export type GetKeysOfType<Type extends Record<string, any>, Obj extends Record<string, any>> = keyof {
    [Key in keyof Obj as Obj[Key] extends Type ? Key : never]: Obj[Key];
};
export interface TypingProps {
    texts: string[];
    speed?: number;
    infinite?: boolean;
    color?: GetKeysOfType<PaletteColor, Palette>;
}
export type TypingSpanProps = Omit<TypographyProps, "color"> & {
    color: Exclude<TypingProps["color"], undefined>;
};
//# sourceMappingURL=index.d.ts.map