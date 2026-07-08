import React from "react";

import FooterLinks from "../footer-links";
import FooterPartners from "./footer-partners";
import DownloadApp from "./download-app";
import Socials from "./socials";
import Contact from "./contact";
import WebsiteFeatures from "./website-features";

const DesktopFooter = () => {
  return (
    <footer className="px-5 max-lg:hidden text-xs w-full border-t border-black/10 pt-15 mt-15 flex flex-col gap-7 bg-surface-primary">
      <Contact />
      <WebsiteFeatures />
      <div className="flex mt-5 justify-between items-center h-60">
        <Socials />
        <FooterLinks />
      </div>
      <DownloadApp />
      <FooterPartners />
    </footer>
  );
};

export default DesktopFooter;
