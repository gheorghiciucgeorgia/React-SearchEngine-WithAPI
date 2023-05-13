import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Bookmark from './components/Bookmark'
import Home from './Home'
import ContentPage from './componente/ContentPage';


function App() {
  const [bookmark, setBookmark] = useState([]);

  const handleClick = (item) => {
		if (bookmark.indexOf(item) !== -1) return;
		setBookmark([...bookmark, item]);
	  }
  return (
    <>
      <Routes >
        <Route path='/' element={<Home bookmark={bookmark}/>}></Route>
        <Route path='/searchresults' element={<ContentPage handleClick={handleClick}/>}></Route>
        <Route path='/bookmark' element={<Bookmark bookmark={bookmark} setBookmark={setBookmark}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
