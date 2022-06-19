import React from 'react'
import Toast from 'react-bootstrap/Toast';

export default function Alert(props) {

    const captilize = (word) => {
        let first = word.charAt(0).toUpperCase();
        return first + word.slice(1);
    }
    return (
        <div className="container" style={{height:'50px'}}>
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{captilize(props.alert.type)}!</strong> {props.alert.msg}
        </div>}
        </div>
    )
}
