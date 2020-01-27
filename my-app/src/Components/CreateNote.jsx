import React, { Component } from "react";
import "../App.css";
import NoteController from "../Controller/NoteController";
import { Card, Button, FormControl } from "react-bootstrap";

class CreateNote extends Component {
  
  render() {
    const {title,description,onChangeTitle,onChangeDescription,onClose,handleClickOpen,openNote} = this.props;
    return (
      <div className="createNote-container">
        <div className="noteComponent d-flex justify-content-center">
         {/* {!this.state.openNote ? ( */}
          {!openNote ? (
            <Card className="note-button" style={{border:'none',outline:'none'}}>
              <div>
                <FormControl
                  className="inputbase"
                  style={{ width: "100%", padding: "10px" }}
                  //multiline
                  spellCheck={true}
                  placeholder="Take a note...."
                  // onClick={this.handleClickOpen}
                  onClick={handleClickOpen}
                />
              </div>
            </Card>
          ) : (
            <Card>
              <div>
                <FormControl
                  name="title"
                  className="inputbase"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontWeight: "bold",
                    fontSize: "120%"
                  }}
                  //multiline
                  // spellCheck={true}
                  placeholder="Tittle...."
                  // value={this.state.title}
                  value={title}
                  // onChange={this.onChangeTitle}
                  onChange={onChangeTitle}
                />
                <FormControl
                  name="description"
                  className="inputbase"
                  style={{ width: "100%", padding: "10px" }}
                 // multiline
                  // spellCheck={true}
                  placeholder="Take a note...."
                  // value={this.state.description}
                  value={description}
                  // onChange={this.onChangeDescription}
                  onChange={onChangeDescription}
                />
              </div>

              <div>
                <div className="button-icon">
                  <div>
                    <i
                      className="fa fa-bell-o note-fa"
                      title="Remind me"
                      style={{ marginLeft: "2%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-user-plus"
                      title="Collaborator"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-print"
                      title="Change Color"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-file-image-o"
                      title="Add image"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <i
                      className="fa fa-archive"
                      title="Archive"
                      style={{ marginLeft: "5%" }}
                      aria-hidden="true"
                    ></i>
                    <Button
                      className="float-right"
                      variant="light"
                      // onClick={this.onClose}
                      onClick={onClose}
                      style={{height:'33px',background:'none',fontWeight:'bold'}}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    );
  }
}
export default CreateNote;
