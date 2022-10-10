import React from 'react';
import {

} from './style';
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
    return (
        <>
            HomePage
            <Link to="/">Logout</Link>
        </>
    );
}

export default HomePage;