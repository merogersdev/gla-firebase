// Hard set actions rather than just strings
export const ACTIONS = {
  LOGIN: "LOGIN",
  LOGIN_FAIL: "LOGIN_FAIL",
  LOGOUT: "LOGOUT",
  LOGOUT_FAIL: "LOGOUT_FAIL",
};

// Initial State for Application
export const INITIAL_AUTH_STATE = {
  user: null,
  loading: true,
  error: false,
};

// Item Reducer used in ItemContext
const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        user: action.payload,
        loading: false,
        error: false,
      };
    case ACTIONS.LOGIN_FAIL:
      return {
        user: action.payload,
        loading: false,
        error: true,
      };
    case ACTIONS.LOGOUT:
      return {
        user: null,
        loading: false,
        error: false,
      };
    case ACTIONS.LOGOUT_FAIL:
      return {
        user: action.payload,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
