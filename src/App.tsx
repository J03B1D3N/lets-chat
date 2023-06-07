import React from 'react';
import { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/header';
import Footer from './Components/footer';
import Main from './Components/main';

type LogInContextType = [boolean?, Function?]

type ChatRoomContextType = [Array<Object>?, Function?]

export const ChatRoomContext = React.createContext<ChatRoomContextType>([]);



export const SignedInContext = React.createContext<LogInContextType>([]);

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [chatRoom, setChatRoom] = useState([]) 


  return (
    <ChatRoomContext.Provider value={[chatRoom, setChatRoom]}>
    <SignedInContext.Provider value={[loggedIn, setLoggedIn]}>
  <div className="app bg-secondary text-white vh-100 d-flex flex-column justify-content-between">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
    </SignedInContext.Provider>
    </ChatRoomContext.Provider>
    
  );
}

export default App;
