import { usContent } from "./us";
import { indiaContent } from "./india";
import { hkContent } from "./hk";
import { sgContent } from "./sg";
import { idContent } from "./id";
import { myContent } from "./my";
import { nzContent } from "./nz";
import { pkContent } from "./pk";
import { phContent } from "./ph";
import { ukContent } from "./uk";
import type { RichCalculatorContent } from "./types";

export type { RichCalculatorContent, RichCalculatorSection, RichFAQItem } from "./types";

export const calculatorContent: Record<string, RichCalculatorContent> = {
  ...usContent,
  ...indiaContent,
  ...hkContent,
  ...sgContent,
  ...idContent,
  ...myContent,
  ...nzContent,
  ...pkContent,
  ...phContent,
  ...ukContent
};
