"use client";

import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

type TailwindSpacing =
  | "0"
  | "0.5"
  | "1"
  | "1.5"
  | "2"
  | "2.5"
  | "3"
  | "3.5"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "14"
  | "16"
  | "20"
  | "24"
  | "28"
  | "32"
  | "36"
  | "40"
  | "44"
  | "48"
  | "52"
  | "56"
  | "60"
  | "64"
  | "72"
  | "80"
  | "96";

type SearchBar = {
  placeholder: string;
  divClassName?: string;
  inputClassName?: string;
  searchIcon?: React.ReactNode;
  iconxPosition?: string;
  children?: React.ReactNode;
  childrenxPosition?: string;
  hideOnFocuse?: boolean;
  ariaLabel?: string;
  onChange?: any;
  onKeyDown?: any;
};

const SearchBar = ({
  divClassName,
  inputClassName,
  placeholder,
  searchIcon,
  hideOnFocuse = false,
  iconxPosition,
  children,
  childrenxPosition,
  ariaLabel,
  onChange,
  onKeyDown,
}: SearchBar) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className={`${divClassName} w-full rounded-4xl flex items-center`}>
      <input
        onClick={() => (window.location.hash = "search")}
        id="inputid"
        className={`${inputClassName} w-full text-sm focus:outline-none px-3 pb-1 relative`}
        type="search"
        aria-label={ariaLabel || placeholder}
        role="searchbox"
        onChange={(e) => onChange(e.target.value)}
        placeholder={isFocused ? "" : placeholder}
        onFocus={() => (hideOnFocuse ? setIsFocused(true) : null)}
        onBlur={() => (hideOnFocuse ? setIsFocused(false) : null)}
        onKeyDown={onKeyDown}
      />
      {searchIcon && (
        <label
          htmlFor="inputid"
          className={`absolute scale-140 text-black/30 cursor-text
            ${iconxPosition ? `${iconxPosition}` : ""}
            `}
        >
          {searchIcon}
        </label>
      )}

      {children && (
        <label
          htmlFor="inputid"
          className={`${isFocused ? "hidden" : null} ${childrenxPosition ? `${childrenxPosition}` : ""}
            absolute text-black/50 cursor-text`}
        >
          {children}
        </label>
      )}
    </div>
  );
};

export default SearchBar;
