"use server";

import { getBrandNames } from "../querys";

export const GetBrandNamesAction = async () => {
  const brands = await getBrandNames();
  if (!brands) return;
  return brands;
};
