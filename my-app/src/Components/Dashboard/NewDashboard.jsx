import React, {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import './Dashboard.css';
import SideBar from './SideBar';
import Header from '../Header';

class NewDashboard extends Component{
    render(){
        return(
            <div className="App">
                <div className="">
                    <div className="new-nav">
                        <Header/>
                    </div>
                </div>
                <div className="side-main">
                   <div className="side-bar">
                        <div className="side-bar-content">
                            <SideBar />
                        </div>
                   </div>
                   <div className="content-main">
                       <div className="note-create">
                           <div className="note-create-content">
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
    ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
    augue duis dolore te feugait nulla facilisi.</p>
                           </div>
                       </div>
                       <div className="notelist">
                           <div className="notelist-content">
                           <SideBar />
                            </div>
                        </div>
                   
                   </div>
                </div>
            </div>
        );
    }
}
export default NewDashboard;