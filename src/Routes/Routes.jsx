import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from '../Routes/PrivateRoute';
import Secret from '../pages/shared/Secret/Secret';
import Dashboard from '../layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';

function RoutesComponent() {
    return (
        <Routes>
            {/* Main Layout Routes */}
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="menu" element={<Menu />} />
                <Route path="order/:category" element={<Order />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="secret" element={<PrivateRoute><Secret /></PrivateRoute>} />
            </Route>

            {/* Dashboard Layout Routes */}
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="mycart" element={<MyCart />} />
            </Route>
        </Routes>
    );
}

export default RoutesComponent;
