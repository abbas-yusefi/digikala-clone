"use server";

import {
  addRecentlySearched,
  deleteOldSearches,
  getRecentlySearched,
  deleteAllRecentSearches,
} from "../querys";

const addRecenetlySearchedAction = async (
  searchedTerm: string,
  userId: string,
) => {
  if (!searchedTerm || !userId) return;
  await deleteOldSearches();
  await addRecentlySearched(searchedTerm, userId);
};

const getRecentlySearchedAction = async (userId: string) => {
  if (!userId) return [];
  const searches = await getRecentlySearched(userId);
  return searches;
};

const deleteAllRecentSearchesAction = async (userId: string) => {
  if (!userId) return;
  await deleteAllRecentSearches(userId);
};

export {
  addRecenetlySearchedAction,
  getRecentlySearchedAction,
  deleteAllRecentSearchesAction,
};
