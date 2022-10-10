import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginRegisterPage from './Pages/LoginRegisterPage';

export default function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<LoginRegisterPage />} />
            <Route path="/home" element={<HomePage />} />
        </Routes>
    );
}