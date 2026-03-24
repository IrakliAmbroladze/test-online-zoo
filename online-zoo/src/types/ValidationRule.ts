export type ValidationRule = {
  test: (value: string, getFieldValue: (name: string) => string) => boolean;
  message: string;
};
