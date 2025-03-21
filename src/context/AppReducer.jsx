export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        mylist: [action.payload, ...state.mylist],
      };
    case "REMOVE_MOVIE":
      return {
        ...state,
        mylist: state.mylist.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};
