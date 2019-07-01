const initialState = {
    valuePage: 1,
    msn : {
      type: undefined,
      messenger:undefined,
      active:false,
    }
  };
  
  const site = (state = initialState, action) => {
    switch (action.type) {
        case "GET_PAGE":
        return {
            ...state,
            valuePage: action.page,
        };
        case "GET_ALERT_REDUCER":
        return {
            ...state,
            msn: action.msn,
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