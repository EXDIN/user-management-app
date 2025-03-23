import { RouteObject } from "react-router-dom";
import Pages from "./pages-enum";
import { Layout } from "../Components";
import {
    AddUserPage,
    EditUserPage,
    HomePage,
    Page404,
    UsersPage,
} from "../Pages";

const routes: RouteObject[] = [
    {
        path: Pages.Home,
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: Pages.Users,
                children: [
                    {
                        index: true,
                        element: <UsersPage />,
                    },
                    {
                        path: Pages.AddUser,
                        element: <AddUserPage />,
                    },
                    {
                        path: Pages.EditUser,
                        element: <EditUserPage />,
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
