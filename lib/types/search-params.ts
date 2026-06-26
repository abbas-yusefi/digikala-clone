export type Params = {
  q: string;
  category: string;
  brand: string;
  discount: boolean | string;
  cursor: string;
  dir: "prev" | "next" | string;
};
