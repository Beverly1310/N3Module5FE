import PrivateRoute from "../../features/protectedRouter/PrivateRoute";
import LayoutIndex from "../../layouts";
import AdminIndex from "../../pages/admin";
import User from "../../pages/admin/User";

const privateRoutes = [
    {
      path: "/admin",
      element: <PrivateRoute element={<AdminIndex />} />,
      children: [
       {
        path: "user",
        element: <PrivateRoute element={<User/>}/>
       }
      ],
    },
  ];
  
  export default privateRoutes;