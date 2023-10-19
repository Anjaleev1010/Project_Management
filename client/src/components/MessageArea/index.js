import React from 'react';
import './toast.css'

export default function  Toaster(props) {
    let statusMsg = ''
    if(props?.toastData?.status == 200){//add condition
        statusMsg = 'toast--success'//pop up messages
    } else{
        statusMsg = 'toast--error'
    }
    return (
        <div>
            <div className ={ `toast toast--visible ${statusMsg}` }>{props?.toastData?.msg}</div>
        </div>
    )
}