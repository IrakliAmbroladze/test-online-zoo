import type { ValidationRule } from "./ValidationRule";

export type Input = {
  type: string;
  placeholder?: string;
  name: string;
  validationRules?: ValidationRule[];
};
