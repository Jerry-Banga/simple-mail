import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/error_page";
import HomePage from "../pages/home_page";
import { InBoxPage } from "../pages/inbox_page";
import MessagePage from "../pages/message_page";
import {  userAndmailsLoader } from "../utils/user_and_mails_loader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
                loader:  userAndmailsLoader,//Gets the predefined user and the mails from the server
            },
            {
                path: "inbox",
                element: <InBoxPage />,
            },
            {
                path: '/inbox/message/:id',
                element: <MessagePage />
            }
        ]
    },
]);
