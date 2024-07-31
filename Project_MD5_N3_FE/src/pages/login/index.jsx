import { Button, Input, notification } from "antd";
import "./index.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gọi API đăng nhập tài khoản
    dispatch(
      login({
        email: user.email,
        password: user.password,
      })
    )
      .unwrap()
      .then((response) => {
        const roles = response?.data?.roles;
        if (roles.some((role) => role === "ADMIN")) {
          navigate("/admin");
        } else if (roles.some((role) => role === "MODERATOR")){
          navigate("/moderator");
        } else {
            navigate("/")
        }

        notification.success({
          message: "Thành công",
          description: "Đăng nhập thành công",
        });
      })
      .catch(() => {
        notification.error({
          message: "Thất bại",
          description: "Đăng nhập thất bại.",
        });
      });
  };

  return (
    <>
      <div className="ra-login-container">
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="heading">Đăng nhập tài khoản</h3>

          <div className="form-group">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <Input
              onChange={handleChange}
              name="email"
              className="form-input"
            />
            {/* <p className="error-message">Email không để trống</p> */}
          </div>
          <div className="form-group">
            <label htmlFor="" className="form-label">
              Mật khẩu
            </label>
            <Input
              onChange={handleChange}
              name="password"
              className="form-input"
            />
            {/* <p className="error-message">Mật khẩu không để trống</p> */}
          </div>
          <div className="button-login">
            <Button htmlType="submit" type="primary">
              Đăng nhập
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}