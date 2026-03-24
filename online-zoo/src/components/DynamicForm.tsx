import { useState } from "react";
import type { Input } from "../types/Input";

type Props = {
  title?: string;
  inputs: Input[];
  endpointURL: string;
};

export const DynamicForm = ({ title = "Form", inputs, endpointURL }: Props) => {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(inputs.map((i) => [i.name, ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validity, setValidity] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(inputs.map((i) => [i.name, false])),
  );
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getFieldValue = (name: string) => values[name] ?? "";

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (name: string) => {
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (cfg: Input) => {
    const value = values[cfg.name];

    if (!cfg.validationRules?.length) {
      setValidity((prev) => ({ ...prev, [cfg.name]: value.trim().length > 0 }));
      return;
    }

    const failedRule = cfg.validationRules.find(
      (rule) => !rule.test(value, getFieldValue),
    );

    setErrors((prev) => ({
      ...prev,
      [cfg.name]: failedRule?.message ?? "",
    }));
    setValidity((prev) => ({
      ...prev,
      [cfg.name]: !failedRule,
    }));
  };

  const allValid = Object.values(validity).every(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setServerError("");

    try {
      const response = await fetch(endpointURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        let message = "Incorrect login or password";
        try {
          const data = await response.json();
          if (data?.error) message = data.error;
        } catch (error) {
          console.log(error);
        }
        setServerError(message);
        return;
      }

      const { data } = await response.json();
      const { user, access_token } = data;

      if (user) localStorage.setItem("user", JSON.stringify(user));
      if (access_token) localStorage.setItem("access_token", access_token);

      window.location.href = "/";
    } catch (err) {
      console.log(err);
      setServerError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        {inputs.map((cfg) => (
          <div key={cfg.name} className="input-wrapper">
            <input
              type={cfg.type}
              placeholder={cfg.placeholder ?? ""}
              name={cfg.name}
              value={values[cfg.name]}
              onChange={(e) => handleChange(cfg.name, e.target.value)}
              onFocus={() => handleFocus(cfg.name)}
              onBlur={() => handleBlur(cfg)}
              className={errors[cfg.name] ? "input--invalid" : ""}
            />
            {errors[cfg.name] && (
              <span className="input-error">{errors[cfg.name]}</span>
            )}
          </div>
        ))}

        <button
          type="submit"
          disabled={!allValid || isLoading}
          className="btn-submit btn btn--orange"
        >
          {isLoading ? "loading..." : "submit"}
        </button>

        {serverError && <p className="form-server-error">{serverError}</p>}
      </form>
    </div>
  );
};
