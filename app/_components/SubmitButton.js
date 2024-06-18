"use client";

import SpinnerMini from "./SpinnerMini";
import { useFormStatus } from "react-dom";

function SubmitButton({ children }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 rounded-sm px-4 py-2 sm:px-8 sm:py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed text-sm sm:text-base disabled:bg-gray-500 disabled:text-gray-300 "
      disabled={pending}
    >
      {pending ? <SpinnerMini /> : children}
    </button>
  );
}

export default SubmitButton;
