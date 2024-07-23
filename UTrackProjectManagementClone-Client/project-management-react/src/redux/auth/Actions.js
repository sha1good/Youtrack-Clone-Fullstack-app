import axios from "axios";
import {
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./ActionsType";
import { API_BASE_URL } from "@/config/api";

export const register = (userData) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/signup`,
        userData
      );

      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        dispatch({ type: REGISTER_SUCCESS, payload: data });
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch({ type: REGISTER_FAILURE, error: error.message });
    }
  };
};

export const login = (userData) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const { data } = await axios.post(
        `${API_BASE_URL}/auth/signin`,
        userData
      );

      if (data.jwt) {
        localStorage.setItem("token", data.jwt);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const { data } = await axios.get(`${API_BASE_URL}/api/users/profiles`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (data) {
        
        localStorage.setItem("user", data);
        dispatch({ type: GET_USER_SUCCESS, payload: data });
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_USER_FAILURE, error: error.message });
    }
  };
};

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  localStorage.clear();
};
