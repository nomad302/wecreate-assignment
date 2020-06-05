import homeData from "./homePageData";
import secondData from "./nextPageData";

export const getCurrentRoute = (term) => {
  return { type: "CURRENT_ROUTE", payload: term };
};

export const getFirstPageData = () => {
  return { type: "FIRST_PAGE_DATA", payload: homeData.data };
};

export const addUsers = (users) => {
  return { type: "ADD_USERS", payload: users };
};

export const clearUsers = () => {
  return { type: "CLEAR_USERS" };
};

export const getSecondPageData = () => {
  return { type: "SECOND_PAGE_DATA", payload: secondData.data };
};
