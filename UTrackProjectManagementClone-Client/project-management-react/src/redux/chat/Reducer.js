import {
  FETCH_CHAT_BY_PROJECT_FAILURE,
  FETCH_CHAT_BY_PROJECT_REQUEST,
  FETCH_CHAT_BY_PROJECT_SUCCESS,
  FETCH_CHAT_MESSAGE_FAILURE,
  FETCH_CHAT_MESSAGE_REQUEST,
  FETCH_CHAT_MESSAGE_SUCCESS,
  FETCH_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAILURE,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
} from "./ActionType";

const initialState = {
  messages: [],
  chat: null,
  loading: false,
  error: null,
};

 const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAT_BY_PROJECT_REQUEST:
    case FETCH_CHAT_MESSAGE_REQUEST:
    case SEND_MESSAGE_REQUEST:
      return { ...state, error: null, loading: true };

    case FETCH_MESSAGE_SUCCESS:
    case FETCH_CHAT_MESSAGE_SUCCESS:
      return { ...state, loading: false, messages: action.messages };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.message],
      };
    case FETCH_CHAT_BY_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        chat: action.chat,
      };

    case FETCH_CHAT_BY_PROJECT_FAILURE:
    case FETCH_CHAT_MESSAGE_FAILURE:
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

 export default ChatReducer;
