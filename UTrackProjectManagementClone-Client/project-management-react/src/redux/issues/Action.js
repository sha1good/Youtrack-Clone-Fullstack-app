// Action for Fetching issues

import api from "@/config/api";
import {
  ASSIGN_ISSUE_TO_USER_FAILURE,
  ASSIGN_ISSUE_TO_USER_REQUEST,
  ASSIGN_ISSUE_TO_USER_SUCCESS,
  CREATE_ISSUE_FAILURE,
  CREATE_ISSUE_REQUEST,
  CREATE_ISSUE_SUCCESS,
  DELETE_ISSUE_REQUEST,
  FETCH_ISSUES_BY_ID_FAILURE,
  FETCH_ISSUES_BY_ID_REQUEST,
  FETCH_ISSUES_BY_ID_SUCCESS,
  FETCH_ISSUES_FAILURE,
  FETCH_ISSUES_REQUEST,
  FETCH_ISSUES_SUCCESS,
  UPDATE_ISSUE_STATUS_FAILURE,
  UPDATE_ISSUE_STATUS_REQUEST,
  UPDATE_ISSUE_STATUS_SUCCESS,
} from "./ActionTypes";

export const fetchIssues = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ISSUES_REQUEST });

    try {
      const response = await api.get(`/api/issues/project/${projectId}`);
      dispatch({ type: FETCH_ISSUES_SUCCESS, issues: response.data });
    } catch (error) {
      dispatch({ type: FETCH_ISSUES_FAILURE, error: error.message });
    }
  };
};

export const fetchIssuesById = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_ISSUES_BY_ID_REQUEST });

    try {
      const response = await api.get(`/api/issues/${issueId}`);
      dispatch({ type: FETCH_ISSUES_BY_ID_SUCCESS, issue: response.data });
    } catch (error) {
      dispatch({ type: FETCH_ISSUES_BY_ID_FAILURE, error: error.message });
    }
  };
};

export const updateIssuesById = ({ issueId, status }) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_ISSUE_STATUS_REQUEST });

    try {
      const response = await api.put(`/api/issues/${issueId}/status/${status}`);
      console.log("Project========", response.data);
      dispatch({ type: UPDATE_ISSUE_STATUS_SUCCESS, issue: response.data });
    } catch (error) {
      dispatch({ type: UPDATE_ISSUE_STATUS_FAILURE, error: error.message });
    }
  };
};

export const assignIssuesToUser = ({ issueId, userId }) => {
  return async (dispatch) => {
    dispatch({ type: ASSIGN_ISSUE_TO_USER_REQUEST });

    try {
      const response = await api.put(
        `/api/issues/${issueId}/assignee/${userId}`
      );
      dispatch({ type: ASSIGN_ISSUE_TO_USER_SUCCESS, issue: response.data });
    } catch (error) {
      dispatch({ type: ASSIGN_ISSUE_TO_USER_FAILURE, error: error.message });
    }
  };
};

export const createIssue = (issueData) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_ISSUE_REQUEST });

    try {
      const response = await api.post(`/api/issues`, issueData);
      dispatch({ type: CREATE_ISSUE_SUCCESS, issue: response.data });
    } catch (error) {
      dispatch({ type: CREATE_ISSUE_FAILURE, error: error.message });
    }
  };
};

export const deleteIssuesById = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_ISSUE_REQUEST });

    try {
      await api.delete(`/api/issues/${issueId}`);
      dispatch({ type: FETCH_ISSUES_BY_ID_SUCCESS, issueId });
    } catch (error) {
      dispatch({ type: FETCH_ISSUES_BY_ID_FAILURE, error: error.message });
    }
  };
};
