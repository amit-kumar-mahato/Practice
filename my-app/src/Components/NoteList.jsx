import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import Note from '../Components/Note';
class NoteList extends Component{

    render(){
    const {titles} = this.props;
        return(
            <div style={{display:'flex'}}>
               {
                   titles.map(item => {
                       return<Note title={item.title} description={item.description}/>;
                   })
               }
            </div>
        );
    }
}
export default NoteList;