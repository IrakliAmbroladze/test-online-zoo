type CreateFormProps = {
  formNodeId: string | null;
  title?: string;
};
export const createForm = ({
  formNodeId,
  title = "Form",
}: CreateFormProps): void => {
  if (!formNodeId) return;
  const elForm = document.getElementById(formNodeId);
  console.log(elForm);
  const elTitle = document.createElement("h1");
  elTitle.textContent = title;
  elForm?.appendChild(elTitle);
};
