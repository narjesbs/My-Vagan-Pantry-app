import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
	const token = localStorage.getItem('token');
	const auth = useSelector((state) => state.authReducer.auth);

	return <>{token || auth ? children : <Navigate to='/signUp'></Navigate>}</>;
}

export default PrivateRoute;
