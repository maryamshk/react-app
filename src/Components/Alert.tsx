import React from 'react'
import {ReactNode} from 'react';

// using children prop we can pass children to component

interface Props { // children: string;
    children: ReactNode; //
    onClose: () => void;
}
const Alert = ({children, onClose} : Props) => {
    return (
        <div className="alert alert-primary alert-dismissible">
            {children}
            <button type="button" className="btn-close"
                onClick={onClose}
                data-bs-dismiss="alert"
                aria-label="Close"></button>
        </div>
    )
}

export default Alert
