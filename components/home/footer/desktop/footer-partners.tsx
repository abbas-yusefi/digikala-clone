import React from "react";
import FooterPartnerRow from "../footer-partner-row";

import digimag from "@/public/partners/digimag.svg";
import digipay from "@/public/partners/digipay.svg";
import digistyle from "@/public/partners/digistyle.svg";
import digiplus from "@/public/partners/digiplus.svg";
import digiclub from "@/public/partners/digiclub.svg";
import jet from "@/public/partners/jet.svg";
import digify from "@/public/partners/digify.svg";
import digikalads from "@/public/partners/digikalads.svg";
import digiMehr from "@/public/partners/digiMehr.svg";
import diginext from "@/public/partners/diginext.svg";
import ganjeh from "@/public/partners/ganjeh.svg";
import digiexpress from "@/public/partners/digiexpress.svg";
import smartech from "@/public/partners/smartech.svg";
import digitalGold from "@/public/partners/digital-gold.svg";
import digikalaService from "@/public/partners/digikala-service.svg";
import digikalaBusiness from "@/public/partners/digikala-business.svg";
import miare from "@/public/partners/miare.svg";
import vidomart from "@/public/partners/vidomart.svg";

const FooterPartners = () => {
  const partners = [
    {
      src: digimag,
      alt: "digimag",
    },
    {
      src: digipay,
      alt: "digipay",
    },
    {
      src: digistyle,
      alt: "digistyle",
    },
    {
      src: digiplus,
      alt: "digiplus",
    },
    {
      src: digiclub,
      alt: "digiclub",
    },
    {
      src: jet,
      alt: "jet",
    },
    {
      src: digify,
      alt: "digify",
    },
    {
      src: digikalads,
      alt: "digikalads",
    },
    {
      src: digiMehr,
      alt: "digiMehr",
    },
    {
      src: diginext,
      alt: "diginext",
    },
    {
      src: ganjeh,
      alt: "ganjeh",
    },
    {
      src: digiexpress,
      alt: "digiexpress",
    },
    {
      src: smartech,
      alt: "smartech",
    },
    {
      src: digitalGold,
      alt: "digitalGold",
    },
    {
      src: digikalaService,
      alt: "digikalaService",
    },
    {
      src: digikalaBusiness,
      alt: "digikalaBusiness",
    },
    {
      src: miare,
      alt: "miare",
    },
    {
      src: vidomart,
      alt: "vidomart",
    },
  ];
  return (
    <div className="-mx-5 -mb-7">
      <div className="flex">
        <FooterPartnerRow
          firstImg={partners[0]}
          secondImg={partners[1]}
          thirdImg={partners[2]}
        />
        <FooterPartnerRow
          firstImg={partners[3]}
          secondImg={partners[4]}
          thirdImg={partners[5]}
        />
        <FooterPartnerRow
          firstImg={partners[6]}
          secondImg={partners[7]}
          thirdImg={partners[8]}
        />
      </div>
      <div className="flex">
        <FooterPartnerRow
          firstImg={partners[9]}
          secondImg={partners[10]}
          thirdImg={partners[11]}
        />
        <FooterPartnerRow
          firstImg={partners[12]}
          secondImg={partners[13]}
          thirdImg={partners[14]}
        />
        <FooterPartnerRow
          firstImg={partners[15]}
          secondImg={partners[16]}
          thirdImg={partners[17]}
        />
      </div>
    </div>
  );
};

export default FooterPartners;
