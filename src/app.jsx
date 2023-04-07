import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import styles from './app.module.css'
import Login from './components/login';
import Maker from './components/maker';

function App({ FileInput, authService }) {

  const [user, setUser] = useState();

  return (
      <div className={styles.app}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path="/*" element={<Login user={user} setUser={setUser} />}></Route>
              <Route path="/maker" element={<Maker user={user} setUser={setUser} FileInput={FileInput} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
