import { DynamicForm } from "../components/DynamicForm";
import { REGISTRATION_INPUTS } from "../constants/registration";

export default function Registration() {
  return (
    <div className="page-registration">
      <main className="main">
        <div id="form-registration">
          <DynamicForm
            title="Registration"
            endpointURL="https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/register"
            inputs={REGISTRATION_INPUTS}
          />
        </div>
      </main>
    </div>
  );
}
