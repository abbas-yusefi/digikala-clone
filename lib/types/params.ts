export type Params = {
  params: {
    q: string;
    category: string;
    brand: string;
    discount: boolean | string;
    cursor: string;
    dir: "prev" | "next" | string;
  };
  limitedParams: {
    q: string;
    category: string;
    brand: string;
    discount: boolean | string;
    cursor: string;
    dir: string;
  };
};
