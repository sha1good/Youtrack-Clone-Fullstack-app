import api from "@/config/api";
import {
  ACCEPT_INVITIVATION_PROJECT_FAILURE,
  ACCEPT_INVITIVATION_PROJECT_REQUEST,
  ACCEPT_INVITIVATION_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  FETCH_PROJECT_BY_ID_FAILURE,
  FETCH_PROJECT_BY_ID_REQUEST,
  FETCH_PROJECT_BY_ID_SUCCESS,
  FETCH_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
  INVITE_TO_PROJECT_FAILURE,
  INVITE_TO_PROJECT_REQUEST,
  INVITE_TO_PROJECT_SUCCESS,
  SEARCH_PROJECT_FAILURE,
  SEARCH_PROJECT_REQUEST,
  SEARCH_PROJECT_SUCCESS,
} from "./ActionTypes";

export const fetchProject =
  ({ category, tags }) =>
  async (dispatch) => {
    dispatch({ type: FETCH_PROJECT_REQUEST });
    try {
      const { data } = await api.get("/api/projects", {
        params: { category, tags },
      });
      dispatch({ type: FETCH_PROJECT_SUCCESS, projects: data });
      console.log("All Project Data", data);
      console.log("Hello ");
    } catch (error) {
      console.log("Error", error);
      dispatch({ type: FETCH_PROJECT_FAILURE, payload: error.message });
    }
  };

export const searchProject = (keyword) => async (dispatch) => {
  console.log("Hello from search projects")
  dispatch({ type: SEARCH_PROJECT_REQUEST });
  try {
    const { data } = await api.get("/api/projects/search?keyword=" + keyword);
    console.log("All Search Project", data);
    dispatch({ type: SEARCH_PROJECT_SUCCESS, searchProjects: data });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: SEARCH_PROJECT_FAILURE, payload: error.message });
  }
};

export const createProject = (projectData) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_REQUEST });
  try {
    const { data } = await api.post("/api/projects", projectData);
    console.log("Created Project", data);
    dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: CREATE_PROJECT_FAILURE, payload: error.message });
  }
};

export const fetchProjectById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });
  try {
    const { data } = await api.get("/api/projects/" + id);
    console.log("Project", data);
    dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: FETCH_PROJECT_BY_ID_FAILURE, payload: error.message });
  }
};

export const deleteProjectById = (projectId) => async (dispatch) => {
  dispatch({ type: DELETE_PROJECT_REQUEST });
  try {
    const { data } = await api.delete("/api/projects/" + projectId);
    console.log("Project", data);
    dispatch({ type: DELETE_PROJECT_SUCCESS, projectId });
  } catch (error) {
    console.log("Error", error);
    dispatch({ type: DELETE_PROJECT_FAILURE, payload: error.message });
  }
};

export const inviteToProject =
  ({ email, projectId }) =>
  async (dispatch) => {
    dispatch({ type: INVITE_TO_PROJECT_REQUEST });
    try {
      const { data } = await api.post("/api/projects/invite", {
        email,
        projectId,
      });
      console.log("Invited Project", data);
      dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    } catch (error) {
      console.log("Error", error);
      dispatch({ type: INVITE_TO_PROJECT_FAILURE, paylod: error.message });
    }
  };

export const acceptInviteToProject =
  ({ token, navigate }) =>
  async (dispatch) => {
    dispatch({ type: ACCEPT_INVITIVATION_PROJECT_REQUEST });
    try {
      const { data } = await api.get("/api/projects/accept_invitation", {
        params: { invitetoken: token },
      });
      console.log("Invited Project", data);

      navigate("/project/" + data.projectId);
      dispatch({ type: ACCEPT_INVITIVATION_PROJECT_SUCCESS, payload: data });
    } catch (error) {
      console.log("Error", error);
      dispatch({ type: ACCEPT_INVITIVATION_PROJECT_FAILURE, payload: error });
    }
  };
