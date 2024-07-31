import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = Cookies.get("userInfo");
    const dataParse = JSON.parse(data);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    };
    return (
        <div>
            <span>Họ tên: {dataParse.fullName}</span>
            <span>Email: {dataParse.email}</span>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    );
}