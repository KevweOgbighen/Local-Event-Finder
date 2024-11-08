import axios from 'axios';

const API_URL = "http://localhost:8080/auth"; // Change this to your backend URL

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : "Network Error";
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : "Network Error";
    }
};

export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : "Network Error";
    }
};