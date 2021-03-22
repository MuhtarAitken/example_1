import React from 'react';
import './index.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Navbar/Dialogs/Dialogs";
import Music from "./components/Navbar/Music/Music";
import News from "./components/Navbar/News/News";
import Setting from "./components/Navbar/Setting/Setting";

import {BrowserRouter, Route} from "react-router-dom";
import state from "./redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
               <Route path='/dialogs' render={ () =><Dialogs
                   state={props.state.dialogsPage}/>}/>

               <Route path='/profile' render={ () => <Profile
                   state={props.state.profilePage}/>}/>
                <Route path='/Music' component={Music}/>
                <Route path='/News' component={News}/>
                <Route path='/Setting' component={Setting}/>
            </div>
        </div>
        </BrowserRouter>
    );
}
export default App;




