import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ element }) {
  const navigate = useNavigate();
  const isLogin = true;

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin]);
  return element;
}