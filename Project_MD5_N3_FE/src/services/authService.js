import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../api";
import { POST } from "../constants/httpMethod";

export const getDataFromCookie = createAsyncThunk(
  "auth/getDataFromCookie",
  (userData) => {
    return userData;
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const response = await BASE_URL[POST]("auth/login", {
      email,
      password,
    });

    Cookies.set("token", response.data.accessToken);
    Cookies.set(
      "userInfo",
      JSON.stringify({
        email: response.data.email,
        fullName: response.data.fullName,
      }),
      { expires: 1 / 24 / 60 }
    );

    return response;
  }
);