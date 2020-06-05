export default (state = {}, action) => {
  switch (action.type) {
    case "SECOND_PAGE_DATA": {
      return action.payload;
    }

    default:
      return state;
  }
};
