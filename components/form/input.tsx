"use client";

import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

type InputProps = {
  children: React.ReactNode;
  register: UseFormRegister<any>;
  registerName: string;
  inputType?: string;
  errors: FieldErrors<any>;
  serverError?: any;
  isPasswordHidden?: boolean;
  autoComplete?: string;
  onTogglePassword?: () => void;
};

const Input = ({
  children,
  inputType,
  registerName,
  register,
  errors,
  serverError,
  isPasswordHidden,
  onTogglePassword,
  autoComplete,
}: InputProps) => {
  const serverFieldError =
    serverError?.field === registerName || serverError?.field === "general"
      ? serverError.message === "Configuration"
        ? "ایمیل یا رمز ورود اشتباه است"
        : serverError?.message
      : null;

  let inputTypeWithPassword = "";

  if (inputType && inputType === "password") {
    inputTypeWithPassword = isPasswordHidden ? "text" : "password";
  } else {
    inputTypeWithPassword = inputType || "text";
  }

  return (
    <>
      <div className="w-full relative flex items-center justify-center mt-4">
        <input
          type={inputTypeWithPassword}
          placeholder=""
          id={registerName}
          {...register(registerName)}
          autoComplete={autoComplete && autoComplete}
          className={`${errors[registerName]?.message ? "border-brand-secondary" : ""} peer w-full border-2 rounded-md p-3 border-black/20 focus:border-black focus:outline-none transition duration-300 [&:-webkit-autofill]:bg-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white]`}
          style={{
            direction: "rtl",
          }}
        />
        <label
          htmlFor={registerName}
          className={`${errors[registerName]?.message ? "text-brand-secondary" : ""} select-none absolute right-3 text-xs -top-4 font-bold peer-focus:-top-4 bg-surface-primary p-1 transition-all duration-200 rounded-md text-black/30 peer-focus:text-black peer-placeholder-shown:top-3 peer-autofill:-top-4`}
        >
          {children}
        </label>
        {["password", "confirmPassword"].includes(registerName) && (
          <button
            type="button"
            onClick={() => onTogglePassword?.((prev) => !prev)}
            className="absolute left-0 cursor-pointer p-4"
          >
            {isPasswordHidden ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        )}
      </div>
      {errors ? (
        <p className="text-brand-secondary text-[0.7em] ml-auto font-semibold">
          {errors[registerName]?.message?.toString() || serverFieldError}
        </p>
      ) : null}
    </>
  );
};

export default Input;
