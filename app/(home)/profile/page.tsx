import React from "react";
import SignoutButton from "./signout-button";
import { auth } from "@/auth";

const page = async () => {
  const sessoin = await auth();
  // console.log(sessoin);

  return (
    <div>
      <h2>profile</h2>
      <p>{sessoin ? "logged in" : "not logged in"}</p>
      <SignoutButton />
    </div>
  );
};

export default page;
