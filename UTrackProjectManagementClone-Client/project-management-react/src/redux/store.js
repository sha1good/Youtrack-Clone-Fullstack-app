import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./auth/Reducer";
import { projectReducer } from "./project/Reducer";
import ChatReducer from "./chat/Reducer";
import { commentReducer } from "./comment/Reducer";
import { issueReducer } from "./issues/Reducer";
import { subReducer } from "./subscription/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chat: ChatReducer,
  comments: commentReducer,
  issues: issueReducer,
  subscription: subReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
