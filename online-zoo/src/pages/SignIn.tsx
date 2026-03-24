import { DynamicForm } from "../components/DynamicForm";
import { SIGN_IN_INPUTS } from "../constants/signin";

export default function SignIn() {
  return (
    <div className="page-sign-in">
      <main className="main">
        <div id="form-sign-in">
          <DynamicForm
            title="Sign In"
            endpointURL="https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/auth/login"
            inputs={SIGN_IN_INPUTS}
          />
        </div>
      </main>
    </div>
  );
}
