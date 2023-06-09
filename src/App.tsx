import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './Components/header';
import Footer from './Components/footer';
import Main from './Components/main';
import { db } from './firebase/firebase';
import { getDocs, collection, DocumentData } from "firebase/firestore";




type LogInContextType = [boolean?, Function?]

type dataContextType = [DocumentData?, Function?]

type ChosenProjectDataContextType = [Array<Object>?, Function?]

type ChosenProjectNameContextType = {
  chosenProjectName: string;
  setChosenProjectName: React.Dispatch<React.SetStateAction<string>>
}



export const dataContext = React.createContext<dataContextType>([]);

export const SignedInContext = React.createContext<LogInContextType>([]);

export const ChosenProjectDataContext = React.createContext<ChosenProjectDataContextType>([]);

export const ChosenProjectNameContext = React.createContext<ChosenProjectNameContextType | null>(null);



function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [data, setData] = useState<DocumentData>([]) 
  const [chosenProjectData, setChosenProjectData] = useState([])
  const [chosenProjectName, setChosenProjectName] = useState("")


  async function getData() {
    const querrySnapshot = await getDocs(collection(db, "Let's chat"))
    let querryArray:object[] = []
    querrySnapshot.forEach((doc) => {
    const obj = {
      id: doc.id,
      data: doc.data()
    }
    querryArray.push(obj)
    })
      console.log(querryArray)
      setData(querryArray)
    
  }

  useEffect(() => {
    getData()

  }, [])


  return (
    <ChosenProjectNameContext.Provider value={{chosenProjectName, setChosenProjectName}}>
    <ChosenProjectDataContext.Provider value={[chosenProjectData, setChosenProjectData]}>
    <dataContext.Provider value={[data, setData]}>
    <SignedInContext.Provider value={[loggedIn, setLoggedIn]}>
  <div className="app bg-secondary text-white ">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
    </SignedInContext.Provider>
    </dataContext.Provider>
    </ChosenProjectDataContext.Provider>
    </ChosenProjectNameContext.Provider>
    
  );
}

export default App;
