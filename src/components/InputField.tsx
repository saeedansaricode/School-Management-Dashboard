import React from "react";
import { FieldError } from "react-hook-form";

interface InputFieldType {
  lable: string;
  type?: string;
  register: (name: string) => {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
    ref: (instance: HTMLInputElement | null) => void;
    name: string;
  };
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
  lable,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldType) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{lable}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        {...inputProps}
        defaultValue={defaultValue}
      />
      {error?.message && (
        <p className="text-xs text-red-400">{error?.message.toString()}</p>
      )}
      
    </div>
  );
};

export default InputField;
