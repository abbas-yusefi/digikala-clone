import Link from "next/link";
import React from "react";

type NavComponentProps = {
  icon?: React.ReactNode;
  children: string;
  className?: string;
  iconClassName?: string;
  href?: string;
};

const NavComponent = ({
  icon,
  iconClassName,
  children,
  className,
  href = "/",
}: NavComponentProps) => {
  return (
    <Link
      href={href}
      className={`${className} relative group cursor-pointer h-10 flex items-center`}
    >
      {children}

      {icon ? (
        <span
          className={`${iconClassName ? `${iconClassName}` : `right-1`} absolute scale-130 mt-1`}
        >
          {icon}
        </span>
      ) : null}
      <span className="underline-animation"></span>
    </Link>
  );
};

export default NavComponent;
