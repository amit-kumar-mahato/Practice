import React, { Component } from "react";
import Newheader from '../Components/Newheader';
import Header from '../Components/Header';
import SideDrawer from '../Components/SideDrawer';
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";
export default class Dashboard extends Component {
  state={
    titles:[],
    descriptions:[],
    title:'',
    description:'',
    openNote:false
  };
  handleClickOpen = () => {
    this.setState({
      openNote: true
    });
  };
  onChangeTitle = e =>{
    this.setState({title: e.target.value})
  };
  onChangeDescription = e =>{
    this.setState({description: e.target.value})
  };
  onClose = e =>{
    e.preventDefault();
    if(this.state.title === "" && this.state.description === ""){
      this.setState({openNote:false})
    }
    else{
    const notes = {
      title: this.state.title,
      description: this.state.description 
    }

    const createNote = [...this.state.titles,...this.state.descriptions,notes];
    this.setState({
      titles: createNote,
      title:'',
      description:'',
      openNote:false
    });
  }
  }
  render() {
    let mainContent = {
      marginTop:'9%',
      backgroundColor:'violet'
    }
   
    return (
      <div className="App">
        <Header />
        {/* <div className="side-main-content">
        <div className="Side_Drawer d-flex justify-content-start" style={{backgroundColor:'yellow'}}> */}
          <SideDrawer />
       {/* </div> */}
        {/* <div className="Main_Content d-flex justify-content-center" style={{mainContent}}> */}
          <CreateNote
            title={this.state.title}
            description={this.state.description}
            openNote={this.state.openNote}
            handleClickOpen={this.handleClickOpen}
            onChangeTitle={this.onChangeTitle}
            onChangeDescription={this.onChangeDescription}
            onClose={this.onClose}
          />
          
        {/* </div>
        <div className="Main_Content d-flex justify-content-center mr-2"> */}
        <NoteList titles={this.state.titles}/>
        {/* </div>
        </div> */}
      </div>
    );
  }
}
