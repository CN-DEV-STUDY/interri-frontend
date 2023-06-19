import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
    const isAuthenticated = Cookies.get('userId');

    if (!isAuthenticated) {
        // user is not authenticated
        return <Navigate to='/login' />;
    }

    return children;
};

export default ProtectedRoute;
