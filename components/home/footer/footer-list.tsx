import React from "react";
import { useState } from "react";
import FooterPartnerRow from "./footer-partner-row";
import { Icons } from "@/lib/icons";

type FooterListProps = {
  children?: React.ReactNode;
  sectionToggleName:
    | "withDigikala"
    | "customerService"
    | "shoppingGauide"
    | "businessPartners";
  sectionName: string;
  partnersDropdown?: boolean;
};

const FooterList = ({
  children,
  sectionToggleName,
  sectionName,
  partnersDropdown,
}: FooterListProps) => {
  const [isToggeled, setIsToggeled] = useState({
    withDigikala: false,
    customerService: false,
    shoppingGauide: false,
    businessPartners: false,
  });

  const partners = [
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digimag.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digipay.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digistyle.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digiplus.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digiclub.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/jet.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digify.svg",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-static/6d8b4e67f90b80c581949f1e680aeaa60fa49d0e_1770621595.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digiMehr.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/diginext.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/ganjeh.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digiexpress.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/smartech.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digital-gold.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digikala-service.svg",
      alt: "",
    },
    {
      src: "https://www.digikala.com/statics/img/svg/footer/digikala-business.svg",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-static/e7661075abe11edde27e6d550c3507756122e1cf_1758969434.svg",
      alt: "",
    },
    {
      src: "https://dkstatics-public.digikala.com/digikala-static/9814bb50f330280b887fe545a6074cc72f33388e_1758978427.svg",
      alt: "",
    },
  ];

  return (
    <div
      className="py-5 border-b border-black/20 cursor-pointer px-4"
      onClick={() =>
        setIsToggeled((prev) => ({
          ...prev,
          [sectionToggleName]: !prev[sectionToggleName],
        }))
      }
    >
      <div className="flex justify-between text-[1em] text-black font-semibold ">
        <button className="cursor-pointer">
          {isToggeled[sectionToggleName] ? (
            <Icons.Down className="text-lg select-none" />
          ) : (
            <Icons.Up className="text-lg select-none" />
          )}
        </button>
        <h4 className="select-none">{sectionName}</h4>
      </div>
      <div className={`${isToggeled[sectionToggleName] ? "pt-5" : "hidden"}`}>
        <ul
          className={`${partnersDropdown ? "flex flex-col justify-center items-center w-full px-[clamp(5px,10px,20px)]" : "flex flex-col justify-end items-end gap-5"} `}
        >
          {partnersDropdown ? (
            <>
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
            </>
          ) : (
            children
          )}
        </ul>
      </div>
    </div>
  );
};

export default FooterList;
