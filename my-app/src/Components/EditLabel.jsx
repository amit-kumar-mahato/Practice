import React, { Component, useState } from "react";
import EditModal from './EditModal';
import { render } from "react-dom";
export default function EditLabel(){
    const[show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () =>setShow(true);

    return(
        <div>
        <div onClick={handleShow}>Click Me</div>
        <EditModal 
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        />
        </div>
    )
}
