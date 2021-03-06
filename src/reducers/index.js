import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import currentRoute from "./currentRouteReducer";
import homePageReducer from "./homePageReducer";
import usersReducer from "./usersReducers";
import secondPageReducer from "./secondPageReducer";

export default combineReducers({
  currentRoute: currentRoute,
  homePageData: homePageReducer,
  secondPageData: secondPageReducer,
  users: usersReducer,
  form: formReducer,
});
