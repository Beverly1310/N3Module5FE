
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from ".";
import { GET } from "../constants/httpMethod";

export const getAllUsers = createAsyncThunk("users/getAllUsers",async ({page,size,search,direction})=>{
    const response = await BASE_URL[GET](`admin/user?page=${page}&size=${size}&search=${search}&direction=${direction}`);
    return response.data;
});
export const changeStatus = createAsyncThunk("users/changeStatus",async (id) => {
    const response = await BASE_URL.put(`/admin/user/${id}`);
    return response.data;
});
export const changeRole = createAsyncThunk("users/changeRole",async (id)=>{
const response = await BASE_URL.put(`/admin/user/setrole/${id}`);
});