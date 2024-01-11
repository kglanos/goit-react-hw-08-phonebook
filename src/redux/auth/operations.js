import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setAuthorizationToken(token) {
    axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
}

export const register = createAsyncThunk(
    '/users/register',
    async (credentials, { thunkAPI }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            setAuthorizationToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const login = createAsyncThunk(
    '/users/login',
    async (credentials, { thunkAPI }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            setAuthorizationToken(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const logout = createAsyncThunk(
    '/users/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            setAuthorizationToken(null);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);

export const refreshUser = createAsyncThunk(
    '/users/refresh',
    async (_, thunkAPI ) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue("Doesn't exist");
        }

        setAuthorizationToken(persistedToken);

        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);
