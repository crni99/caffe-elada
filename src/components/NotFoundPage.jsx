import React from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <>
            <Navigate to="/" replace />;
        </>
    );
};
export default NotFoundPage;
