import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function RequireAuth({ children }) {
    const token = useSelector((state) => state.auth.currentUser.accessToken)
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/sign-in')
        }
    }, [token])
    return children;
}