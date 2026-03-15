import type { Feedback } from "../types/Feedback";
import { fetchData } from "./fetchData";

export const fetchFeedbacks = () =>
  fetchData<Feedback[]>(
    "https://vsqsnqnxkh.execute-api.eu-central-1.amazonaws.com/prod/feedback",
  );
