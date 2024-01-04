import React, { useId, useState, forwardRef } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface PropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | undefined;
  type?: string;
}

const FloatingInput = forwardRef<HTMLInputElement, PropsType>(
  ({ label, error, type = "text", ...props }, ref) => {
    const id = useId();
    const [showPassword, setShowPassword] = useState(false);
    return (
      <div className="relative mb-2 w-full">
        {type === "password" ? (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-2 right-5 text-2xl text-brawn"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </button>
        ) : null}
        <input
          {...props}
          ref={ref}
          className={`peer w-full bg-papaya-whip text-base h-10 rounded-lg disabled:cursor-not-allowed outline-none border ${
            error
              ? "border-[#f00] focus:border-[#f00] focus:ring-[#f00]"
              : "border-black focus:border-[rgb(255,179,92)] focus:ring-[rgb(255,179,92)]"
          } placeholder:select-none py-2 px-3 placeholder-transparent bg-secondary-foreground focus:outline-none focus:ring-1`}
          id={id}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={label}
          autoComplete="off"
        />
        <label
          htmlFor={id}
          className="absolute pointer-events-none select-none w-fit left-3 -top-0.5 transition-all duration-300 text-xs peer-placeholder-shown:text-lg peer-placeholder-shown:top-1 peer-placeholder-shown:left-5 peer-focus:-top-0.5 peer-focus:text-xs peer-focus:left-3"
        >
          {label}
        </label>
        {error ? <p className="text-[#f00] text-sm pr-4">{error}</p> : null}
      </div>
    );
  }
);

export default FloatingInput;
