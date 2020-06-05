export default (state = [], action) => {
  switch (action.type) {
    case "ADD_USERS": {
      return action.payload;
    }
    case "CLEAR_USERS": {
      return [];
    }
    default:
      return state;
  }
};
