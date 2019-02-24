const initialState = {
    msn : {
      type: undefined,
      messenger:undefined,
      active:false,
    }
  };
  
  const site = (state = initialState, action) => {
    switch (action.type) {
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