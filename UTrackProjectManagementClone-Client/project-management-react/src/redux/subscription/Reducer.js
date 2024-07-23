import {
  GET_USER_SUBSCRIPTION_FAILURE,
  GET_USER_SUBSCRIPTION_REQUEST,
  GET_USER_SUBSCRIPTION_SUCCESS,
  UPGRADE_USER_SUBSCRIPTION_FAILURE,
  UPGRADE_USER_SUBSCRIPTION_REQUEST,
  UPGRADE_USER_SUBSCRIPTION_SUCCESS,
} from "./ActionTypes";

const initialState = {
  userSubscription: null,
  loading: false,
  error: null,
};

export const subReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUBSCRIPTION_REQUEST:
    case UPGRADE_USER_SUBSCRIPTION_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_USER_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        userSubscription: action.payload,
      };

    case UPGRADE_USER_SUBSCRIPTION_SUCCESS:
      return {
        ...state,
        loading: false,
        userSubscription: action.payload,
      };
    case UPGRADE_USER_SUBSCRIPTION_FAILURE:
    case GET_USER_SUBSCRIPTION_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};
