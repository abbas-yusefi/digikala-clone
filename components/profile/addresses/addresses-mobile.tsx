import BackButton from "@/components/ui/back-button";
import React from "react";
import AddAddressButton from "./add-address-button";
import { auth } from "@/auth";
import { getAddresses } from "@/lib/queries";
import AddressCard from "./address-card";
import EmptyAddress from "./empty-address";

const AddressesMobile = async () => {
  const session = await auth();
  const addressInfo = await getAddresses(session?.user.id);
  return (
    <main className="lg:hidden min-h-screen w-full relative font-semibold">
      <header className="flex justify-end items-center p-4 gap-2 border-b border-black/20 sticky w-full top-0 bg-surface-primary">
        <h2>آدرس ها</h2>
        <BackButton className="text-black/40" />
      </header>
      {addressInfo.length > 0 ? (
        <div className="w-full h-full flex flex-col items-center">
          <h3 className="w-full text-right p-4">آدرس های من</h3>

          {addressInfo.map((addressinfo) => (
            <AddressCard key={addressinfo.id} addressInfo={addressinfo} />
          ))}

          <AddAddressButton />
        </div>
      ) : (
        <EmptyAddress />
      )}
    </main>
  );
};

export default AddressesMobile;
