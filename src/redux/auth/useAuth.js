import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing, selectUserName } from "./selectors";

export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const user = useSelector(selectUserName);
    

    return { isLoggedIn, isRefreshing, user };
};