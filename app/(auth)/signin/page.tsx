import { auth } from "@/auth";
import SigninForm from "@/components/auth/sigin-in-form";
import LoadingDots from "@/components/ui/loading-dots";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

const page = async () => {
  const session = await auth();
  if (session) redirect("/profile");
  return (
    <Suspense fallback={<LoadingDots />}>
      <SigninForm />
    </Suspense>
  );
};

export default page;
