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
  const elTitle = document.createElement("h1");
  elTitle.textContent = title;
  elForm?.appendChild(elTitle);
  const form = document.createElement("form");
  elForm?.appendChild(form);
  inputs.map((input) => {
    const elInput = `
    <input type=${input.type} placeholder=${input.placeholder ? input.placeholder : ""}>
`;
    form.insertAdjacentHTML("beforeend", elInput);
  });
  const btnSubmit = document.createElement("button");
  btnSubmit.type = "submit";
  btnSubmit.textContent = "submit";
  btnSubmit.classList.add("btnSubmit");
  btnSubmit.classList.add("btn");
  btnSubmit.classList.add("btn--green");
  form.appendChild(btnSubmit);
};
