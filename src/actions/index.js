import data from "./homePageData";

export const getCurrentRoute = term => {
  return { type: "CURRENT_ROUTE", payload: term };
};

export const getFirstPageData = () => {
  return { type: "FIRST_PAGE_DATA", payload: data.data };
};

export const addUsers = users => {
  return { type: "ADD_USERS", payload: users };
};
