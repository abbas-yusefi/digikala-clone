import React from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileHeader from "@/components/profile/profile-header";
import OrderProcess from "@/components/profile/order-process";
import PersonalInfo from "@/components/profile/personal-info";
import MobileProfileDashboard from "@/components/profile/profileDashboard/mobile-profile-dashboard";
import ProfileWrapper from "@/components/profile/profile-wrapper";
import { getAllFavorites } from "@/lib/queries";
import ProductCard from "@/components/ui/product-card";
import HorizantalNav from "@/components/shared/horizontal-nav";

const page = async () => {
  const session = await auth();

  if (!session) redirect("/signin");
  const user_id = session.user.id;

  const products = await getAllFavorites(user_id, "recent", 2);

  return (
    <>
      <main className="w-full flex flex-col items-center pb-14 lg:hidden">
        <ProfileHeader />
        <PersonalInfo session={session} />
        <OrderProcess />
        <MobileProfileDashboard />
      </main>
      <main className="max-lg:hidden flex flex-col gap-4">
        <ProfileWrapper>
          <OrderProcess />
        </ProfileWrapper>
        <ProfileWrapper>
          <HorizantalNav>
            {products?.map((product) => (
              <ProductCard
                variant="slim"
                data={product}
                key={product.product_id}
              />
            ))}
          </HorizantalNav>
        </ProfileWrapper>
      </main>
    </>
  );
};

export default page;
