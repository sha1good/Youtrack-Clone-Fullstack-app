import api from "@/config/api";
import {
  GET_USER_SUBSCRIPTION_FAILURE,
  GET_USER_SUBSCRIPTION_REQUEST,
  GET_USER_SUBSCRIPTION_SUCCESS,
  UPGRADE_USER_SUBSCRIPTION_FAILURE,
  UPGRADE_USER_SUBSCRIPTION_REQUEST,
  UPGRADE_USER_SUBSCRIPTION_SUCCESS,
} from "./ActionTypes";

export const getUserSubscription = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_SUBSCRIPTION_REQUEST });

    try {
      const { data } = api.get("/api/subscription/user");
      dispatch({ type: GET_USER_SUBSCRIPTION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_SUBSCRIPTION_FAILURE, error: error.message });
    }
  };
};

export const upgradeUserSubscription = ({ subscriptionType }) => {
  return async (dispatch) => {
    dispatch({ type: UPGRADE_USER_SUBSCRIPTION_REQUEST });

    try {
      const { data } = api.patch("/api/subscription/upgrade", null, {
        params: { subscriptionType: subscriptionType },
      });
      dispatch({ type: UPGRADE_USER_SUBSCRIPTION_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPGRADE_USER_SUBSCRIPTION_FAILURE,
        error: error.message,
      });
    }
  };
};
