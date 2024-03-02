import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import EnglishPage from "../Pages/EnglishPage/EnglishPage";
import HomePage from "../Pages/HomePage/HomePage";
import MathPage from "../Pages/MathPage/MathPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import SciencePage from "../Pages/SciencePage/SciencePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "math", element: <MathPage />},
            {path: "science", element: <SciencePage />},
            {path: "english", element: <EnglishPage />},
            {path: "profile", element: <ProfilePage />},
            {path: "*", element: <div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>404 Error: Page Not Found</h1>
            </div>}
        ]
    }
])