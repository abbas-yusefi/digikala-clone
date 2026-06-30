"use server";

import { getFilteredBrandsPerCategory } from "../querys";

const filterBrandAction = async (category_id: string | number) => {
  //   if (!category_id || +category_id >= 0 || category_id.toString().length === 0)
  //     return;
  try {
    const result = await getFilteredBrandsPerCategory(category_id);
    return result;
  } catch (err) {
    console.log(err);
  }
};
export { filterBrandAction };
