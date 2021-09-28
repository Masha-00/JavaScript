import React, { createContext, useState } from 'react';
import '../src/App.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import SongNavbar from './UI/navbar/navbar';
import { AuthContext } from './context';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);
  return (
    <AuthContext.Provider value={{isUserLogin, setIsUserLogin}}>
      <BrowserRouter>
        <SongNavbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
    
  );
}

export default App;
