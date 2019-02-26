const initialState = {
    msn : {
      type: undefined,
      messenger:undefined,
      active:false,
    },
    user:{
      username:undefined,
      email:undefined,
      password:undefined,
      balance:0,
      token:undefined
    }
  };
  
  const platform = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALERT_PLAT_REDUCER":
          return {
              ...state,
              msn: action.msn,
          };
        case "SET_USER_REDUCER":
          return {
              ...state,
              user: action.user,
          };
        default:
        {
        return {
          ...state
        };
      }
    }
}
export default platform;