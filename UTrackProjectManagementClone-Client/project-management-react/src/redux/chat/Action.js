import api from "@/config/api";
import {
  FETCH_CHAT_BY_PROJECT_FAILURE,
  FETCH_CHAT_BY_PROJECT_REQUEST,
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_CHAT_MESSAGE_FAILURE,
  FETCH_CHAT_MESSAGE_REQUEST,
  FETCH_CHAT_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "./ActionType";

export const sendMessage = (messageData) => {
  return async (dispatch) => {
    dispatch({ type: SEND_MESSAGE_REQUEST });
    try {
      const response = await api.post("/api/messages/send", messageData);
      console.log("Message=====", response.data)
      dispatch({ type: SEND_MESSAGE_SUCCESS, message: response.data });
    } catch (error) {
      dispatch({ type: SEND_MESSAGE_FAILURE, error: error.message });
    }
  };
};

export const fetchChatByProject = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHAT_BY_PROJECT_REQUEST });
    try {
      const response = await api.get(`/api/projects/${projectId}/chat`);
      console.log("Fetch Chat", response.data);
      dispatch({ type: FETCH_CHAT_BY_PROJECT_SUCCESS, chat: response.data });
    } catch (error) {
      dispatch({ type: FETCH_CHAT_BY_PROJECT_FAILURE, error: error.message });
    }
  };
};

export const fetchChatMessages = (chatId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_CHAT_MESSAGE_REQUEST });
    try {
      const { data } = await api.get(`/api/messages/chat/${chatId}`);
      console.log("Fetch Messages", data);
      dispatch({ type: FETCH_CHAT_MESSAGE_SUCCESS, chatId, messages: data });
    } catch (error) {
      dispatch({ type: FETCH_CHAT_MESSAGE_FAILURE, error: error.message });
    }
  };
};
