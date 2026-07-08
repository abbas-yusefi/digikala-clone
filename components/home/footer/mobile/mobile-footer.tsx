import React from "react";
import MobileFooterContact from "./mobile-footer-contact";
import FooterLinks from "../footer-links";
import ScrollBackUpButton from "../scroll-back-up-button";

const MobileFooter = () => {
  return (
    <footer className="mb-20 flex justify-center flex-col text-sm text-black/60 cursor-pointer lg:hidden">
      <ScrollBackUpButton />
      <MobileFooterContact />
      <FooterLinks />
    </footer>
  );
};

export default MobileFooter;
