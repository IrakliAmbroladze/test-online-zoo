type Input = {
  type: string;
  placeholder?: string;
};

type CreateFormProps = {
  formNodeId: string | null;
  title?: string;
  inputs: Input[];
};
export const createForm = ({
  formNodeId,
  title = "Form",
  inputs,
}: CreateFormProps): void => {
  if (!formNodeId) return;
  const elForm = document.getElementById(formNodeId);
  console.log(elForm);
  const elTitle = document.createElement("h1");
  elTitle.textContent = title;
  elForm?.appendChild(elTitle);
  console.log(inputs);
  const form = document.createElement("form");
  elForm?.appendChild(form);
  inputs.map((input) => {
    const elInput = `
    <input type=${input.type} placeholder=${input.placeholder ? input.placeholder : ""}>
`;
    form.insertAdjacentHTML("beforeend", elInput);
  });
};
