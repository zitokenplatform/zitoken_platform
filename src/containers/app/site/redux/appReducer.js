const initialState = {
    valuePage: 1,
  };
  
  const site = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PAGE":
        return {
            ...state,
            valuePage: action.page,
        };
        default:
        {
        return {
          ...state
        };
      }
    }
}
export default site;