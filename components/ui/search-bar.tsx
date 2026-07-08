"use client";

import { KeyboardEventHandler, useState } from "react";
import { FaXmark } from "react-icons/fa6";

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
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  autoFocus?: boolean;
  value?: string;
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
  autoFocus,
  value,
}: SearchBar) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <div className={`${divClassName} w-full rounded-4xl flex items-center`}>
      <input
        value={value}
        onClick={() => (window.location.hash = "search")}
        id="inputid"
        className={`${inputClassName} w-full text-sm focus:outline-none px-3 pb-1 relative [&:-webkit-autofill]:bg-white [&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_white]`}
        type="search"
        aria-label={ariaLabel || placeholder}
        role="searchbox"
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={isFocused ? "" : placeholder}
        autoFocus={autoFocus ? true : false}
        onFocus={() => (hideOnFocuse ? setIsFocused(true) : null)}
        onBlur={() => (hideOnFocuse ? setIsFocused(false) : null)}
        onKeyDown={onKeyDown}
      />
      <button
        className="absolute ml-4 cursor-pointer"
        onClick={() => onChange && onChange("")}
      >
        <FaXmark className="scale-125 text-black/40" />
      </button>
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
