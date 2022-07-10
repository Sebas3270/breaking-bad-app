import { useLocation } from "react-router-dom";

const useCurrentPath = () => {

    const lcoation = useLocation();
    return location.pathname === '/';
}

export default useCurrentPath;