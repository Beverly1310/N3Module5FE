import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./AdminMenu.scss";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from '@mui/icons-material/Person';
import { LocalShipping } from "@mui/icons-material";
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import DashboardIcon from '@mui/icons-material/Dashboard';
export default function AdminMenu() {
  return (
    <>
      <menu className="ra-admin-menu">
        <Link to="/admin" className="logo">
          <img
            className="image"
            src="https://static.vecteezy.com/system/resources/previews/010/074/323/non_2x/electricity-logo-electric-logo-design-template-vector.jpg"
            alt=""
          />
        </Link>
        <div className="navlinks">
          <NavLink end className="link" to="/admin">
          <DashboardIcon />
            <span>Tổng quan</span>
          </NavLink>
          <NavLink className="link" to="/">
            <CategoryIcon />
            <span>Quản lý danh mục</span>
          </NavLink>
          <NavLink className="link" to="/">
            <InventoryIcon />
            <span> Quản lý sản phẩm</span>
          </NavLink>
          <NavLink className="link" to="/admin/user">
          <PersonIcon/>
            <span> Quản lý người dùng</span>
          </NavLink>
          <NavLink className="link" to="/">
          <LocalShipping/>
            <span> Quản lý đơn hàng</span>
          </NavLink>
          <NavLink className="link" to="/">
          <ViewCarouselIcon />
            <span> Quản lý banner</span>
          </NavLink>
        </div>
      </menu>
    </>
  );
}
