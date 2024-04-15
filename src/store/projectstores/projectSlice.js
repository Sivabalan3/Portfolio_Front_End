import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_URL} from '../constant'
import { notification } from 'antd';

export const PROJECT_URL = "/api/projects";
export const UPLOAD_URL = "/api/upload";

// Async actions
export const getProjectById = createAsyncThunk('projects/getProjectById', async (projectId) => {
  const response = await axios.get(`${PROJECT_URL}/${projectId}`);
  return response.data;
});

export const getProjects = createAsyncThunk('projects/getProjects', async () => {
  const response = await axios.get(`${BASE_URL}/api/projects`);
  return response.data;
});

export const getProjectDetails = createAsyncThunk('projects/getProjectDetails', async (projectId) => {
  const response = await axios.get(`${PROJECT_URL}/${projectId}`);
  return response.data;
});

export const allProjects = createAsyncThunk('projects/allProjects', async () => {
  const response = await axios.get(`${PROJECT_URL}/allProjects`);
  return response.data;
});

export const createProject = createAsyncThunk(
  'projects/createProject',
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/projects`, projectData);

      // Success notification
      if (response.data.message) {
        notification.success({
          message: 'Success',
          description: response.data.message
        });
      }

      return response.data;
    } catch (error) {
      // Error notification
      if (error.response && error.response.data && error.response.data.message) {
        notification.error({
          message: 'Error',
          description: error.response.data.message
        });
      }

      return rejectWithValue(error.response.data);
    }
  }
);


export const updateProject = createAsyncThunk('projects/updateProject', async ({ projectId, formData }) => {
  const response = await axios.put(`${PROJECT_URL}/${projectId}`, formData);
  return response.data;
});

export const deleteProject = createAsyncThunk('projects/deleteProject', async (projectId) => {
  const response = await axios.delete(`${PROJECT_URL}/${projectId}`);
  return response.data;
});

export const createReview = createAsyncThunk('projects/createReview', async (data) => {
  const response = await axios.post(`${PROJECT_URL}/${data.projectId}/reviews`, data);
  return response.data;
});

export const uploadProjectImage = createAsyncThunk(
  'projects/uploadProjectImage',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/upload`, data);
      
      if (response.data.message) {
        notification.success({
          message: 'Success',
          description: response.data.message
        });
      }
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        notification.error({
          message: 'Error',
          description: error.response.data.message
        });
      }
      return rejectWithValue(error.response.data);
    }
  }
);


// Slice
const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    getProjectById: { data: null, loading: false, error: null },
    getProjects: { data: [], loading: false, error: null },
    // ... Repeat for all other async actions ...
  },
  reducers: {},
  extraReducers: (builder) => {
    
    builder.addCase(getProjectById.pending, (state) => {
      state.getProjectById.loading = true;
    });
    builder.addCase(getProjectById.fulfilled, (state, action) => {
      state.getProjectById.data = action.payload;
      state.getProjectById.loading = false;
    });
    builder.addCase(getProjectById.rejected, (state, action) => {
      state.getProjectById.error = action.error.message;
      state.getProjectById.loading = false;
    });
    builder.addCase(getProjects.pending, (state) => {
      state.getProjects.loading = true;
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      // action.payload is the array of projects
      state.getProjects.data = action.payload;
      state.getProjects.loading = false;
    });
    builder.addCase(getProjects.rejected, (state, action) => {
      state.getProjects.error = action.error.message;
      state.getProjects.loading = false;
    });
    // ... Repeat for all other async actions ...


    
    builder.addCase(getProjectDetails.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });
    builder.addCase(allProjects.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });
    builder.addCase(updateProject.fulfilled, (state, action) => {
     
    });
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });
    builder.addCase(createReview.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
    });
    builder.addCase(uploadProjectImage.fulfilled, (state, action) => {
      // handle the state update when the promise is fulfilled
      const { payload } = action;
      state.projectImage = payload;
    });
    // ... Repeat for all other async actions ...
  },
});

export default projectsSlice.reducer;
