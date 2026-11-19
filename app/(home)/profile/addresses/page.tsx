import AddressesDesktop from "@/components/profile/addresses/addresses-desktop";
import AddressesMobile from "@/components/profile/addresses/addresses-mobile";
import React from "react";

const page = () => {
  return (
    <>
      <AddressesMobile />
      <AddressesDesktop />
    </>
  );
};

export default page;
