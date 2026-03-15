export const getFormFieldValue = ({
  form,
  name,
}: {
  form: HTMLFormElement;
  name: string;
}): string => {
  const el = form.querySelector<HTMLInputElement>(`[name="${name}"]`);
  return el ? el.value : "";
};
