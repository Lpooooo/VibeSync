import axios from 'axios';

const API_URL = 'http://localhost:3030/api/auth';

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }
    return response.data;
};

export const register = async (name, email, password) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            name,
            email,
            password,
        });
        console.log('Response from register API:', response.data); // Ajoutez ce log
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error.response?.data || error.message); // Ajoutez ce log
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    return null;
};

export const authHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return { Authorization: `Bearer ${token}` };
    }
    return {};
};