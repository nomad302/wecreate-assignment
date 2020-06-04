import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import currentRoute from "./currentRouteReducer";
import homePageReducer from "./homePageReducer";
import usersReducer from "./usersReducers";

export default combineReducers({
  currentRoute: currentRoute,
  homePageData: homePageReducer,
  users: usersReducer,
  form: formReducer
});
