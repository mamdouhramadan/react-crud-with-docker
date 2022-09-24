import axios from "axios";
import { API_URL } from "../constants";

// Get all Users 
export const getAllUsers = axios.get(`${API_URL}/users`);

// Add new User
export const addUser = (user) => axios.post(`${API_URL}/users/add`, null, { params: user });

// View User
export const viewUser = (id) => axios.get(`${API_URL}/users/${id}`);

// Update User
export const updateUser = (id, user) => axios.put(`${API_URL}/users/update/${id}`, null, { params: user });

// Delete User
export const deleteUser = (id) => axios.delete(`${API_URL}/users/delete/${id}`);


