import React,{ Component } from "react";
import { Modal } from "react-bootstrap";

class EditModal extends Component{
/* https://jsfiddle.net/Asifuzzaman/fs96h8m4/ */
    render(){
        return(
            <div>
      <Modal show={this.props.show} onHide={this.props.handleClose} centered>
        <h3>Welcome</h3>
      </Modal>
            </div>
        )
    }
}
export default EditModal;