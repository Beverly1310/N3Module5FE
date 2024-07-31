import { createBrowserRouter } from "react-router-dom";
import privateRoutes from "./privateRoute";
import publicRoutes from "./publicRoute";

// Lấy tất cả các route bên trong public và private
const routes = createBrowserRouter([...publicRoutes, ...privateRoutes]);

export default routes;