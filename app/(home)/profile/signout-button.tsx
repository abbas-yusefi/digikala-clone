"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignoutButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        signOut();
        router.replace("/");
      }}
    >
      logout
    </button>
  );
};

export default SignoutButton;
