export default (state = {}, action) => {
  switch (action.type) {
    case "FIRST_PAGE_DATA": {
      return action.payload;
    }

    default:
      return state;
  }
};
