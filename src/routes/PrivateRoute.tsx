import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

type ImportRoutesProps = {
    children: JSX.Element;
}

export function PrivateRoutes({ children }: ImportRoutesProps) {
    const token = localStorage.getItem('token')

    if(!token){
        return <Navigate to="/login" replace />
    }

    return children

}