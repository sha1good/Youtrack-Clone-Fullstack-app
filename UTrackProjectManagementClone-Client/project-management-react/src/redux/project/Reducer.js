import {
  ACCEPT_INVITIVATION_PROJECT_FAILURE,
  ACCEPT_INVITIVATION_PROJECT_REQUEST,
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
  SEARCH_PROJECT_FAILURE,
  SEARCH_PROJECT_REQUEST,
  SEARCH_PROJECT_SUCCESS,
} from "./ActionTypes";

const initialState = {
  projects: [],
  searchProjects: [],
  projectDetails: null,
  loading: false,
  error: null,
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECT_REQUEST:
    case CREATE_PROJECT_REQUEST:
    case DELETE_PROJECT_REQUEST:
    case FETCH_PROJECT_BY_ID_REQUEST:
    case INVITE_TO_PROJECT_REQUEST:
    case ACCEPT_INVITIVATION_PROJECT_REQUEST:
    case SEARCH_PROJECT_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        projects: action.projects,
      };

    case SEARCH_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        searchProjects: action.searchProjects,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        projects: [...state.projects, action.project],
      };

    case FETCH_PROJECT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        projectDetails: action.project,
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        projects: state.projects.filter(
          (project) => project.id !== action.projectId
        ),
      };

      
    case FETCH_PROJECT_FAILURE:
    case FETCH_PROJECT_BY_ID_FAILURE:
    case SEARCH_PROJECT_FAILURE:
    case INVITE_TO_PROJECT_FAILURE:
    case ACCEPT_INVITIVATION_PROJECT_FAILURE:
    case CREATE_PROJECT_FAILURE:
    case DELETE_PROJECT_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
     return state;
  }
};
