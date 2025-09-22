import { useEffect, useState } from "react";
import getToken from "../functions/Token/getToken";
import TokenCon from "../constants/tokens/TokenCon";
import MainRoutes from "./MainRoutes";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import { userContext } from "../utils/context/ContextProvider";

function WorkerRoutes() {
    const [isAuthenticated, setIsAuthenticated] = useState<null | boolean>(null);
    const { authReloader } = userContext();

    useEffect(() => {
        const checkAuth = async () => {
            setIsAuthenticated(null);
            const token = await getToken(TokenCon.Auth.isLogin);
            if (token) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, [authReloader]);

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }

    return isAuthenticated ? (
        <MainRoutes />
    ) : (
        <Routes>
            <Route path="*" element={<LoginPage />} />
        </Routes>
    );
}

export default WorkerRoutes;
