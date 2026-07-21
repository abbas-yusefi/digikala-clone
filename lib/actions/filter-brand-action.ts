"use server";

import { getFilteredBrandsPerCategory } from "../queries";

const filterBrandAction = async (category_id: string | number) => {
  if (!category_id) return;

  try {
    const result = await getFilteredBrandsPerCategory(category_id);
    return result;
  } catch (err) {
    console.log(err);
  }
};
export { filterBrandAction };
