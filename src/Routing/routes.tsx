import { RouteObject } from "react-router-dom";
import Pages from "./pages-enum";
import { Layout } from "../Components";
import { AddUser, EditUser, Home, Page404, Users } from "../Pages";

const routes: RouteObject[] = [
    {
        path: Pages.Home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: Pages.Users,
                children: [
                    {
                        index: true,
                        element: <Users />,
                    },
                    {
                        path: Pages.AddUser,
                        element: <AddUser />,
                    },
                    {
                        path: Pages.EditUser,
                        element: <EditUser />,
                    },
                ],
            },
            {
                path: Pages.Undefined,
                element: <Page404 />,
            },
        ],
    },
];

export default routes;
