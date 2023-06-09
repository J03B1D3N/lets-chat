import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/header';
import Footer from './Components/footer';
import Main from './Components/main';
import { db } from './firebase/firebase';
import { collection, DocumentData, onSnapshot} from "firebase/firestore";
import AskToLogIn from './Components/AskToLogIn';
import Nav from './Components/nav';




type LogInContextType = [boolean?, Function?]

type dataContextType = [DocumentData?, Function?]

type ChosenProjectDataContextType = [Array<Object>?, Function?]

type ChosenProjectNameContextType = {
  chosenProjectName: string;
  setChosenProjectName: React.Dispatch<React.SetStateAction<string>>
}
type ChosenProjectIndexContextType = {
  chosenProjectIndex: number | null;
  setChosenProjectIndex: React.Dispatch<React.SetStateAction<number>> 
}



export const dataContext = React.createContext<dataContextType>([]);

export const SignedInContext = React.createContext<LogInContextType>([]);

export const ChosenProjectDataContext = React.createContext<ChosenProjectDataContextType>([]);

export const ChosenProjectNameContext = React.createContext<ChosenProjectNameContextType | null>(null);


export const ChosenProjectIndexContext = React.createContext<ChosenProjectIndexContextType | null>(null);




function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState<DocumentData>([]) 
  const [chosenProjectData, setChosenProjectData] = useState([])
  const [chosenProjectName, setChosenProjectName] = useState("")
  const [chosenProjectIndex, setChosenProjectIndex] = useState(NaN)


  
  useEffect(() => {
    let querryArray:object[] = []

    const unsub = onSnapshot(collection(db, "Let's chat"), (collection) => {
      querryArray = []
      collection.forEach((doc) => {
      const obj = {
      id: doc.id,
      data: doc.data()
    }
    querryArray.push(obj)
    })
      querryArray.sort((a:any,b:any) => a.data.date - b.data.date)
      console.log(querryArray)
      setData(querryArray.reverse())
    })
    return () => {
      unsub()
    }

  }, [])


  return (
    <ChosenProjectIndexContext.Provider value={{chosenProjectIndex, setChosenProjectIndex}}>
    <ChosenProjectNameContext.Provider value={{chosenProjectName, setChosenProjectName}}>
    <ChosenProjectDataContext.Provider value={[chosenProjectData, setChosenProjectData]}>
    <dataContext.Provider value={[data, setData]}>
    <SignedInContext.Provider value={[loggedIn, setLoggedIn]}>
  <div className="app bg-secondary text-white position-relative">
    {loggedIn ? null : <AskToLogIn></AskToLogIn>}
    <Header></Header>
    <Nav></Nav>
    <Main></Main>
    <Footer></Footer>
  </div>
    </SignedInContext.Provider>
    </dataContext.Provider>
    </ChosenProjectDataContext.Provider>
    </ChosenProjectNameContext.Provider>
    </ChosenProjectIndexContext.Provider>
    
  );
}

export default App;
