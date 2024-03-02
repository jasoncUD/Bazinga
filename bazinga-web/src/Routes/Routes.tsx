import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import LearnPage from "../Pages/LearnPage/LearnPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "learn", element: <LearnPage />},
            {path: "profile", element: <ProfilePage />},
            {path: "playing", element: <ProfilePage />},
            {path: "*", element: <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>404 Error: Page Not Found</h1>
            </div>}
        ]
    }
])