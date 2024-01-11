import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUserName, selectIsRefreshing } from "./selectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUserName);
    const isRefreshing = useSelector(selectIsRefreshing);

    return { isLoggedIn, user, isRefreshing };
};