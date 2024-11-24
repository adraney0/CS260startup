import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthState } from '../login/authState';

// PrivateRoute component to protect the /play route
export function PrivateRoute({ element, authState }) {
    if (authState === AuthState.Authenticated) {
        return element; // Render the route if the user is authenticated
    } else {
        return <Navigate to="/" replace />; // Redirect to the login page if not authenticated
    }
}

