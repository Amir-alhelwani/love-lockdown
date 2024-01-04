import React, { useId, forwardRef } from "react";

interface PropsType extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error: string | undefined;
}
const FloatingTextArea = forwardRef<HTMLTextAreaElement, PropsType>(
  ({ label, error, ...props }, ref) => {
    const id = useId();
    return (
      <div className="mb-3 w-full flex-1">
        <div
          className={`w-full bg-secondary-foreground rounded-xl h-full border ${
            error ? "border-[#f00]" : "border-foreground"
          }`}
        >
          <div className="relative pt-5 h-full">
            <textarea
              {...props}
              ref={ref}
              className="peer text-2xl bg-secondary-foreground scrollbar-hide w-full h-full py-1 resize-none rounded-lg outline-none border-none focus:border-none placeholder:select-none px-3 placeholder-transparent focus:outline-none focus:ring-0"
              id={id}
              placeholder={label}
              autoComplete="off"
            />
            <label
              htmlFor={id}
              className="absolute pointer-events-none select-none w-fit right-3 -top-1 transition-all duration-300 text-xl peer-placeholder-shown:text-2xl peer-placeholder-shown:top-3 peer-placeholder-shown:right-5 peer-focus:-top-1 peer-focus:text-xl peer-focus:right-3"
            >
              {label}
            </label>
          </div>
        </div>
        {error ? <p className="text-[#f00] text-lg pr-4">{error}</p> : null}
      </div>
    );
  }
);

export default FloatingTextArea;
