import type { Input } from "../types/Input";

const onlyEnglishLetters = /^[A-Za-z]+$/;
const startsWithLetter = /^[A-Za-z]/;
const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/;

export const REGISTRATION_INPUTS: Input[] = [
  {
    type: "text",
    placeholder: "Login",
    name: "login",
    validationRules: [
      {
        test: (v) => v.trim().length >= 3,
        message: "Login must be at least 3 characters long.",
      },
      {
        test: (v) => startsWithLetter.test(v),
        message: "Login must start with a letter.",
      },
      {
        test: (v) => onlyEnglishLetters.test(v),
        message: "Login may only contain English letters.",
      },
    ],
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    validationRules: [
      {
        test: (v) => v.length >= 6,
        message: "Password must be at least 6 characters long.",
      },
      {
        test: (v) => hasSpecialChar.test(v),
        message: "Password must contain at least 1 special character.",
      },
    ],
  },
  {
    type: "text",
    placeholder: "Name",
    name: "name",
    validationRules: [
      {
        test: (v) => v.trim().length >= 3,
        message: "Name must be at least 3 characters long.",
      },
      {
        test: (v) => onlyEnglishLetters.test(v),
        message: "Name may only contain English letters.",
      },
    ],
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
    validationRules: [
      {
        test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Please enter a valid email address.",
      },
    ],
  },
];
