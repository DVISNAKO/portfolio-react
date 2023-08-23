import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!</h1>
            <i>{error.statusText || error.message}</i>
        </div>
    );
};

export default ErrorPage;